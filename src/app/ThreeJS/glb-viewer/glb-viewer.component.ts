import { Component, ElementRef, AfterViewInit, ViewChild, Renderer2, OnDestroy, HostListener } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glb-viewer',
  templateUrl: './glb-viewer.component.html',
  styleUrls: ['./glb-viewer.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class GlbViewerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('glbContainer', { static: true }) glbContainer!: ElementRef;
  private renderer: THREE.WebGLRenderer | undefined;
  private animationFrameId: number | undefined;
  private scene: THREE.Scene | undefined;
  private camera: THREE.PerspectiveCamera | undefined;
  private controls: OrbitControls | undefined;
  isSmallScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth <= 768;
  }

  constructor(private renderer2: Renderer2) { }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && this.glbContainer) {
      this.initThreeJS();
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initThreeJS(): void {
    const width = this.glbContainer.nativeElement.clientWidth;
    const height = this.glbContainer.nativeElement.clientHeight;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf8f9fa);

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.glbContainer.nativeElement.appendChild(this.renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    this.scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    this.scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load('ThreeJs/final_house.glb', (gltf) => {
      const object = gltf.scene;
      this.scene!.add(object);
      object.position.set(-0.1, -0.3, 0);
      object.scale.set(0.1, 0.1, 0.1);
    }, undefined, (error) => {
      console.error('An error happened while loading the GLB model:', error);
    });

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 100;
    this.controls.maxPolarAngle = Math.PI / 2;

    // Ajuste a posição inicial da câmera para um bom zoom
    this.camera.position.set(2, 0, 1); // Ajuste conforme necessário


    this.animate();
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(() => this.animate());
    this.controls!.update();
    this.renderer!.render(this.scene!, this.camera!);
  }
}
