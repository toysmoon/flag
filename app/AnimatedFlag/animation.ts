import * as THREE from "three";

const [sizeW, sizeH, segW, segH] = [30, 20, 30, 20];

const animationInfo = {
  horizontal: 0.5,
  vertical: 0.1,
  swing: 0.3,
  speed: 0.5,
  angle: 0,
};

export const initAnimationFlag = async (
  element: HTMLDivElement,
  imageSrc: string
) => {
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;

  let flag: THREE.Mesh;
  let flagColor = "#ffffff";
  let flagTexture: THREE.Texture | null = null;

  const width: number = element.clientWidth;
  const height: number = (width * 2) / 3;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
  camera.position.set(0, 0, 40);
  camera.lookAt(new THREE.Vector3(0, 0.0));
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  element.appendChild(renderer.domElement);
  const light = new THREE.DirectionalLight("#FFFFFF", 2.0);
  light.position.set(10, 50, 100);

  scene.add(light);
  const ambientLight = new THREE.AmbientLight("#FFFFFF", 1.0);
  scene.add(ambientLight);

  const geometry = new THREE.PlaneGeometry(sizeW, sizeH, segW, segH);
  const material = new THREE.MeshLambertMaterial({
    color: flagColor,
    side: THREE.DoubleSide,
  });

  flag = new THREE.Mesh(geometry, material);
  scene.add(flag);

  // 텍스쳐 로드
  const texture = await loadTexture(imageSrc);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearFilter;
  flagTexture = texture;

  // 메테리얼 설정
  flag.material = new THREE.MeshLambertMaterial({
    color: flagColor,
    map: flagTexture,
    side: THREE.DoubleSide,
  });

  // 카메라 설정
  camera.position.x = 20 * Math.sin((animationInfo.angle * Math.PI) / 180);
  camera.position.z = 20 * Math.cos((animationInfo.angle * Math.PI) / 180);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  update({ flag, renderer, scene, camera });

  return () => {
    scene.remove(flag);
    scene.remove(camera);
    renderer.dispose();
    element.removeChild(renderer.domElement);
  };
};

const loadTexture = (imageSrc: string) => {
  const loader = new THREE.TextureLoader();
  return new Promise<THREE.Texture>((resolve) =>
    loader.load(imageSrc, (texture) => resolve(texture))
  );
};

const update = ({
  flag,
  renderer,
  scene,
  camera,
}: {
  flag: THREE.Mesh;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
}) => {
  const { horizontal, vertical, swing, speed } = animationInfo;

  for (let y = 0; y < segH + 1; y++) {
    for (let x = 0; x < segW + 1; x++) {
      const index = x + y * (segW + 1);
      const positions = flag.geometry.attributes.position.array;
      const time = (Date.now() * speed) / 50;
      positions[index * 3 + 2] =
        (Math.sin(horizontal * x + vertical * y - time) * swing * x) / 4;
    }
  }
  flag.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
  window.requestAnimationFrame(() => update({ flag, renderer, scene, camera }));
};
