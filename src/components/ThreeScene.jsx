import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.02);

    const camera = new THREE.PerspectiveCamera(
      65,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ---- Neon Buildings (city environment) ----
    const buildings = new THREE.Group();
    const colors = [0xff2a6d, 0x05d9e8, 0xb967ff, 0xa6ff00];
    for (let i = 0; i < 40; i++) {
      const h = 2 + Math.random() * 8;
      const w = 0.8 + Math.random() * 1.2;
      const geo = new THREE.BoxGeometry(w, h, w);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const mat = new THREE.MeshBasicMaterial({
        color,
        wireframe: Math.random() > 0.6,
      });
      const box = new THREE.Mesh(geo, mat);
      box.position.x = (Math.random() - 0.5) * 30;
      box.position.z = -5 - Math.random() * 20;
      box.position.y = h / 2;
      buildings.add(box);
    }
    scene.add(buildings);

    // ---- Glowing point lights ----
    const lights = [];
    for (let i = 0; i < 6; i++) {
      const light = new THREE.PointLight(
        colors[i % colors.length],
        2,
        30
      );
      light.position.set(
        (Math.random() - 0.5) * 20,
        Math.random() * 6 + 2,
        -Math.random() * 10
      );
      lights.push(light);
      scene.add(light);
    }

    // ---- Floating 3D Food Object (Cyber Bowl) ----
    const foodGroup = new THREE.Group();

    // Bowl
    const bowlGeo = new THREE.TorusGeometry(1.2, 0.35, 16, 50);
    const bowlMat = new THREE.MeshStandardMaterial({
      color: 0x05d9e8,
      emissive: 0x05d9e8,
      emissiveIntensity: 0.7,
      metalness: 0.8,
      roughness: 0.2,
    });
    const bowl = new THREE.Mesh(bowlGeo, bowlMat);
    bowl.rotation.x = Math.PI / 2;
    bowl.position.y = -0.3;
    foodGroup.add(bowl);

    // Glowing core (food)
    const coreGeo = new THREE.IcosahedronGeometry(0.9, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xff2a6d,
      emissive: 0xff2a6d,
      emissiveIntensity: 1.2,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    foodGroup.add(core);

    // Orbiting particles around food
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xa6ff00,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    foodGroup.add(particles);

    foodGroup.position.set(0, 3, 0);
    scene.add(foodGroup);

    // ambient light so food is visible
    scene.add(new THREE.AmbientLight(0x404060, 1));

    // ---- Mouse parallax ----
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ---- Animation loop ----
    let frameId;
    const clock = new THREE.Clock();
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      foodGroup.rotation.y = t * 0.4;
      foodGroup.position.y = 3 + Math.sin(t * 1.2) * 0.3;
      particles.rotation.y = -t * 0.6;
      particles.rotation.x = t * 0.2;

      // animated lights
      lights.forEach((l, i) => {
        l.intensity = 1.5 + Math.sin(t * 2 + i) * 1;
      });

      // subtle camera parallax
      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.02;
      camera.position.y += (5 - mouse.y * 1.5 - camera.position.y) * 0.02;
      camera.lookAt(0, 3, 0);

      renderer.render(scene, camera);
    };
    animate();

    // ---- Resize ----
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
} 