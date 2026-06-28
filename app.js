const photoSets = {
  norway: [
    "旅行照片/挪威/FullSizeRender.jpg",
    "旅行照片/挪威/IMG_4421.jpg",
    "旅行照片/挪威/IMG_8621.jpg",
    "旅行照片/挪威/IMG_4572.jpg",
    "旅行照片/挪威/IMG_4571.jpg",
    "旅行照片/挪威/IMG_4762.jpg",
    "旅行照片/挪威/IMG_4827.jpg",
    "旅行照片/挪威/IMG_8615.jpg",
    "旅行照片/挪威/IMG_4895.jpg",
    "旅行照片/挪威/IMG_4857.jpg",
    "旅行照片/挪威/IMG_8499.jpg",
    "旅行照片/挪威/IMG_4729.jpg",
    "旅行照片/挪威/IMG_8475.jpg",
    "旅行照片/挪威/IMG_4449.jpg",
  ],
  sweden: [
    "旅行照片/瑞典/IMG_5015.jpg",
    "旅行照片/瑞典/IMG_5016.jpg",
    "旅行照片/瑞典/IMG_5088.jpg",
    "旅行照片/瑞典/IMG_5040.jpg",
    "旅行照片/瑞典/IMG_5045.jpg",
    "旅行照片/瑞典/IMG_4992.jpg",
    "旅行照片/瑞典/IMG_5052.jpg",
    "旅行照片/瑞典/IMG_5022.jpg",
  ],
  edinburgh: [
    "旅行照片/爱丁堡/IMG_6679.jpg",
    "旅行照片/爱丁堡/IMG_6726.jpg",
    "旅行照片/爱丁堡/IMG_6685.jpg",
    "旅行照片/爱丁堡/IMG_6716.jpg",
    "旅行照片/爱丁堡/IMG_6700.jpg",
    "旅行照片/爱丁堡/IMG_6671.jpg",
    "旅行照片/爱丁堡/IMG_6707.jpg",
    "旅行照片/爱丁堡/IMG_6667.jpg",
  ],
  skipton: [
    "旅行照片/英国skipton/IMG_6889.jpg",
    "旅行照片/英国skipton/IMG_6453.jpg",
    "旅行照片/英国skipton/IMG_9951.jpg",
    "旅行照片/英国skipton/IMG_6581.jpg",
    "旅行照片/英国skipton/IMG_0284.jpg",
    "旅行照片/英国skipton/IMG_6959.jpg",
    "旅行照片/英国skipton/IMG_6568.jpg",
    "旅行照片/英国skipton/IMG_6579.jpg",
    "旅行照片/英国skipton/IMG_6963.jpg",
    "旅行照片/英国skipton/IMG_7052.jpg",
    "旅行照片/英国skipton/IMG_7045.jpg",
    "旅行照片/英国skipton/IMG_6565.jpg",
    "旅行照片/英国skipton/IMG_6607.jpg",
    "旅行照片/英国skipton/IMG_7056.jpg",
    "旅行照片/英国skipton/IMG_7031.jpg",
    "旅行照片/英国skipton/IMG_6926.jpg",
    "旅行照片/英国skipton/IMG_7972.jpg",
    "旅行照片/英国skipton/IMG_6936.jpg",
  ],
  korea: [
    "旅行照片/韩国/IMG_9464.jpg",
    "旅行照片/韩国/IMG_9458.jpg",
    "旅行照片/韩国/IMG_9311.jpg",
    "旅行照片/韩国/IMG_9339.jpg",
    "旅行照片/韩国/IMG_9258.jpg",
    "旅行照片/韩国/IMG_9502.jpg",
    "旅行照片/韩国/IMG_9446.jpg",
    "旅行照片/韩国/IMG_9318.jpg",
    "旅行照片/韩国/IMG_9457.jpg",
    "旅行照片/韩国/IMG_9245.jpg",
    "旅行照片/韩国/IMG_9395.jpg",
    "旅行照片/韩国/IMG_9436.jpg",
    "旅行照片/韩国/IMG_9352.jpg",
  ],
};

const memories = {
  cake: {
    kicker: "birthday table",
    title: "Cake and candles",
    text: "",
    note: "Happy Birthday, my love. ❤️",
    letter: [],
  },
  polaroid: {
    kicker: "birthday gift",
    title: "Polaroid Go Gen 3",
    text: "Keep the moments. ❤️",
    note: "Keep the moments. ❤️",
  },
  cocoa: {
    kicker: "Norway",
    title: "Instant hot cocoa",
    text: "挪威买的速溶热可可，被摆在书桌上。点开它，就是那次旅行的雪、光和一杯可以泡开的热可可。",
    photos: photoSets.norway,
  },
  viking: {
    kicker: "Sweden",
    title: "The tiny viking",
    text: "瑞典买的维京小人，认真地站在书桌上守着我们的旅行回忆。",
    photos: photoSets.sweden,
  },
  magnet: {
    kicker: "Edinburgh",
    title: "Nessie fridge magnet",
    text: "爱丁堡买的尼斯湖水怪冰箱贴，在这个房间里替那座城市占一个小小的位置。",
    photos: photoSets.edinburgh,
  },
  speaker: {
    kicker: "birthday gift",
    title: "Marshall Acton III",
    text: "Happy Birthday, my love! ❤️Now our Acton has an Acton. 🎵",
    image: "marshall acton3.png",
    note: "Happy Birthday, my love! ❤️\nNow our Acton has an Acton. 🎵",
  },
  skiptonCoats: {
    kicker: "Skipton hiking",
    title: "The two winter coats",
    text: "衣架上的两件冬天外套，是英国 Skipton hiking 那天穿过的。",
    photos: photoSets.skipton,
  },
  koreaShirt: {
    kicker: "Korea",
    title: "The short sleeve",
    text: "这件短袖是在韩国买的。它把那次旅行的街道、灯光和日常感一起带回来了。",
    photos: photoSets.korea,
  },
};

const canvas = document.querySelector("#roomCanvas");
const hotspotLayer = document.querySelector("#hotspotLayer");
const world = document.querySelector(".card-world");
const greetingCard = document.querySelector(".greeting-card");
const openingIntro = document.querySelector("#openingIntro");
const openingIntroCopy = document.querySelector("#openingIntroCopy");
const openingIntroEnter = document.querySelector("#openingIntroEnter");
const explorationProgressCount = document.querySelector("#explorationProgressCount");
const resetView = document.querySelector("#resetView");
const bgmToggle = document.querySelector("#bgmToggle");
const bgm = document.querySelector("#bgm");
const dialog = document.querySelector("#memoryDialog");
const closeDialog = document.querySelector("#closeDialog");
const memoryKicker = document.querySelector("#memoryKicker");
const memoryTitle = document.querySelector("#memoryTitle");
const memoryText = document.querySelector("#memoryText");
const memoryGallery = document.querySelector("#memoryGallery");

const gl = canvas.getContext("webgl", { antialias: true, alpha: true });
if (!gl) {
  throw new Error("WebGL is not available in this browser.");
}

const openingIntroParagraphs = [
  "你好啊朱惟一，生日快乐。",
  "这个房间，现在还不存在。我不太会描述期待这种东西，家不是一个从入住那天才开始存在的地方。它可能更早一点，就已经以某种很安静的方式出现。",
  "出现在每一次旅行后带回来的小东西，出现在一件被脱下来又挂好的外套，出现在相机里没有洗出来的照片中，和某一首歌响起时，会突然想到你的那一刻。",
  "后来渐渐会开始想，要是有个地方可以一起回去，把这些东西一点一点放进去。",
  "不是酒店，不是六个人一起住的ensuite，是那种冰箱上贴冰箱贴、衣架上挂着两个人外套的地方。",
  "所以先做了一个🤍",
];

const birthdayLetterParagraphs = [
  "前几天你和我说，你觉得自己好像失去了浪漫细胞，有一点不安。后来我在想也许不是消失了，而是随着生活的节奏，悄悄换了一种存在的方式，至少对我来说是这样的。以前会因为一句话、一场日落、一首歌开心很久。后来开始想着论文怎么办、工作怎么找、东西有没有收好。很多原本会停下来感受的时刻，都被下一件要处理的事情接过去了。但我想着也不必担心，有想法的时候自然会有。",
  "你很喜欢问我，喜不喜欢你，想不想，为什么。有时候你会让我举个例子。而我总是要想很久，最后只说一句，我一下子想不到。你会有一点生气，觉得是不是我没有那么喜欢。后来我想了很久，我才发现，也许不是我没有答案。而是对我来说，喜欢一直都不是一个需要不断证明的问题。它更像空气一样，很少会刻意去意识它的存在，却一直都在那里。所以我会想着把旅行带回来的小东西留下来，会记得你喜欢什么，会在路过一家店的时候觉得这个你应该会喜欢，会一点一点想着，我们以后住在一起的时候，家里可以是什么样子。这些事情对我来说，好像比说出口更自然一点。当然，这并不代表你的表达方式是不对的。只是我们习惯爱的方式，刚好不太一样。而我也还在学习，把那些觉得理所当然的喜欢，告诉你。希望22岁的你也愿意包容我的别扭。",
  "有时候我会想，我会不会让你错过了什么。会不会因为我们选择一起生活，而让你少拥有了一些其他可能。我不知道答案。也不知道八月以后，真正住在一起，会发生什么。不知道未来一年，会不会像想象的一样顺利。也不知道会不会吵架，会不会因为论文焦虑，会不会因为做饭谁洗碗这种小事闹别扭。不过后来我觉得，好像也不用提前知道。生活本来就是这样。很多事情，在开始之前没有答案。我们能做的，只是一起走进去。如果真的遇见了新的问题，那就一起想办法。我们依然会有各自的课题，要面对各自的不安，学习各自不会的东西。成长从来不是某一天突然完成的。",
  "至于社交这件事，会对即将面对的事情会感觉到累，忍不住要抱怨或者放弃，以至于愤怒、生气或者焦虑、悲伤。这些都很正常。我以前记过一句话，也许在未来你会享受可以用新的方式去创造，并隐藏其后的感觉，用新的标准、新的可能带来成就感的体验。慢慢地，在生活的机遇和变化中，真切看到不同人对面事情的态度和做法中的差异，也让我们开始试着回过头来看自己，突然觉得某种向来如此的处事哲学并非是绝对的真理，而自己习惯了的态度、看法、观念和个性，其实没有什么是不能改的，统统都能变。",
  "一次次和世界相处以后，慢慢发现，原来一直相信的事情，不一定只有一种答案；原来那些觉得改不了的性格、习惯和想法，也会在某一天，很自然地变成另外一个样子。所以，不用急着成为任何人。也不用因为今天的自己，就替未来的自己下结论。二十二岁，本来就是一个不断尝试、不断推翻、不断重新认识自己的年纪。希望未来的你，依然会害怕，也依然会好奇，依然会因为喜欢而努力。所以，我一点也不担心。因为我知道，总有一天，你会长成那个自己喜欢的样子。而我很幸运，可以站在你二十二岁的起点陪你出发。",
];
memories.cake.letter = birthdayLetterParagraphs;

const vertexShader = `
  attribute vec3 a_position;
  attribute vec3 a_normal;
  attribute vec3 a_color;
  attribute vec2 a_texCoord;
  uniform mat4 u_matrix;
  uniform mat4 u_model;
  uniform vec3 u_lightDir;
  varying vec3 v_color;
  varying vec2 v_texCoord;
  void main() {
    vec3 normal = normalize(mat3(u_model) * a_normal);
    float light = max(dot(normal, normalize(u_lightDir)), 0.0);
    vec3 warm = vec3(1.06, 0.98, 0.88);
    v_color = a_color * warm * (0.58 + light * 0.50);
    v_texCoord = a_texCoord;
    gl_Position = u_matrix * vec4(a_position, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  varying vec3 v_color;
  varying vec2 v_texCoord;
  uniform sampler2D u_texture;
  uniform float u_useTexture;
  void main() {
    vec4 tex = texture2D(u_texture, v_texCoord);
    gl_FragColor = mix(vec4(v_color, 1.0), tex, u_useTexture);
  }
`;

const program = makeProgram(vertexShader, fragmentShader);
const locations = {
  position: gl.getAttribLocation(program, "a_position"),
  normal: gl.getAttribLocation(program, "a_normal"),
  color: gl.getAttribLocation(program, "a_color"),
  texCoord: gl.getAttribLocation(program, "a_texCoord"),
  matrix: gl.getUniformLocation(program, "u_matrix"),
  model: gl.getUniformLocation(program, "u_model"),
  lightDir: gl.getUniformLocation(program, "u_lightDir"),
  texture: gl.getUniformLocation(program, "u_texture"),
  useTexture: gl.getUniformLocation(program, "u_useTexture"),
};

const vertexBuffer = gl.createBuffer();
const sceneObjects = [];
const hotspots = [];
const actonRequiredKeys = ["cake", "polaroid", "cocoa", "viking", "magnet", "skiptonCoats", "koreaShirt"];
let yaw = -0.72;
let pitch = 0.54;
let distance = 11.8;
let viewProjection = mat4Identity();
let isDragging = false;
let lastPointer = { x: 0, y: 0 };
let bgmReady = false;
let viewedMemoryKeys = new Set();
let speakerUnlocked = false;
let speakerRevealStartedAt = 0;
let pendingActonReveal = false;
let introStarted = false;
let introComplete = false;
let introTimerIds = [];
const sunsetTexture = makeTexture("assets/window-sunset-texture.png");
const SURFACE = {
  floor: 0.08,
  rug: 0.145,
  coffeeTop: 0.54,
  deskTop: 0.8,
};

function cuboidOn(surfaceY, height) {
  return surfaceY + height / 2;
}

function ellipsoidOn(surfaceY, radiusY) {
  return surfaceY + radiusY;
}

function cylinderOn(surfaceY) {
  return surfaceY;
}

function shadowOn(surfaceY) {
  return surfaceY + 0.014;
}

function color(hex) {
  const clean = hex.replace("#", "");
  return [
    parseInt(clean.slice(0, 2), 16) / 255,
    parseInt(clean.slice(2, 4), 16) / 255,
    parseInt(clean.slice(4, 6), 16) / 255,
  ];
}

function markMemorySeen(key) {
  if (!actonRequiredKeys.includes(key) || viewedMemoryKeys.has(key)) return;
  viewedMemoryKeys.add(key);
  updateExplorationProgress();
  if (!speakerUnlocked && actonRequiredKeys.every((item) => viewedMemoryKeys.has(item))) {
    pendingActonReveal = true;
  }
}

function updateExplorationProgress() {
  if (!explorationProgressCount) return;
  explorationProgressCount.textContent = `${viewedMemoryKeys.size}/${actonRequiredKeys.length}`;
}

function revealPendingActonGift() {
  if (!pendingActonReveal || speakerUnlocked) return;
  pendingActonReveal = false;
  window.setTimeout(revealActonGift, 360);
}

function revealActonGift() {
  speakerUnlocked = true;
  speakerRevealStartedAt = performance.now();
  world.classList.add("is-unlocking-acton");
  window.setTimeout(() => world.classList.remove("is-unlocking-acton"), 2800);
}

function speakerRevealAmount() {
  if (!speakerUnlocked) return 0;
  if (!speakerRevealStartedAt) return 1;
  const elapsed = performance.now() - speakerRevealStartedAt;
  const t = Math.min(1, elapsed / 1550);
  const eased = 1 - Math.pow(1 - t, 3);
  const bounce = Math.sin(t * Math.PI * 3) * (1 - t) * 0.08;
  return Math.max(0, Math.min(1.08, eased + bounce));
}

function makeProgram(vsSource, fsSource) {
  const vs = compileShader(gl.VERTEX_SHADER, vsSource);
  const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vs);
  gl.attachShader(shaderProgram, fs);
  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(shaderProgram));
  }
  return shaderProgram;
}

function compileShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}

function addMesh(name, vertices, model = mat4Identity(), options = {}) {
  const buffer = new Float32Array(vertices);
  const stride = options.texture ? 44 : 36;
  const object = {
    name,
    buffer,
    count: buffer.length / (stride / 4),
    model,
    stride,
    texture: options.texture || null,
  };
  sceneObjects.push(object);
  return object;
}

function pushFace(out, points, normal, faceColor) {
  const [a, b, c, d] = points;
  const tris = [a, b, c, a, c, d];
  tris.forEach((p) => out.push(...p, ...normal, ...faceColor));
}

function cuboid(cx, cy, cz, sx, sy, sz, hex) {
  const x0 = cx - sx / 2;
  const x1 = cx + sx / 2;
  const y0 = cy - sy / 2;
  const y1 = cy + sy / 2;
  const z0 = cz - sz / 2;
  const z1 = cz + sz / 2;
  const c = color(hex);
  const out = [];
  pushFace(out, [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], [0, 0, 1], c);
  pushFace(out, [[x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]], [0, 0, -1], c);
  pushFace(out, [[x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0]], [0, 1, 0], c);
  pushFace(out, [[x0, y0, z1], [x0, y0, z0], [x1, y0, z0], [x1, y0, z1]], [0, -1, 0], c);
  pushFace(out, [[x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1]], [1, 0, 0], c);
  pushFace(out, [[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]], [-1, 0, 0], c);
  return out;
}

function plane(points, normal, hex) {
  const out = [];
  pushFace(out, points, normal, color(hex));
  return out;
}

function texturedPlane(points, normal, texture) {
  const out = [];
  const c = color("#ffffff");
  const [a, b, cPoint, d] = points;
  const vertices = [
    [a, [0, 1]],
    [b, [1, 1]],
    [cPoint, [1, 0]],
    [a, [0, 1]],
    [cPoint, [1, 0]],
    [d, [0, 0]],
  ];
  vertices.forEach(([p, uv]) => out.push(...p, ...normal, ...c, ...uv));
  addMesh("window-sunset-photo", out, mat4Identity(), { texture });
}

function makeTexture(src) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([191, 85, 48, 255]),
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  const image = new Image();
  image.addEventListener("load", () => {
    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = 1024;
    textureCanvas.height = Math.round((image.naturalHeight / image.naturalWidth) * textureCanvas.width);
    const textureContext = textureCanvas.getContext("2d");
    textureContext.drawImage(image, 0, 0, textureCanvas.width, textureCanvas.height);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas);
  });
  image.addEventListener("error", () => {
    console.error(`Could not load texture: ${src}`);
  });
  image.src = src;
  return texture;
}

function cylinder(cx, cy, cz, radius, height, hex, segments = 28) {
  const out = [];
  const c = color(hex);
  for (let i = 0; i < segments; i += 1) {
    const a = (i / segments) * Math.PI * 2;
    const b = ((i + 1) / segments) * Math.PI * 2;
    const x0 = cx + Math.cos(a) * radius;
    const z0 = cz + Math.sin(a) * radius;
    const x1 = cx + Math.cos(b) * radius;
    const z1 = cz + Math.sin(b) * radius;
    const n0 = [Math.cos(a), 0, Math.sin(a)];
    const n1 = [Math.cos(b), 0, Math.sin(b)];
    [
      [x0, cy, z0, ...n0],
      [x1, cy, z1, ...n1],
      [x1, cy + height, z1, ...n1],
      [x0, cy, z0, ...n0],
      [x1, cy + height, z1, ...n1],
      [x0, cy + height, z0, ...n0],
    ].forEach((v) => out.push(v[0], v[1], v[2], v[3], v[4], v[5], ...c));

    [
      [cx, cy + height, cz, 0, 1, 0],
      [x1, cy + height, z1, 0, 1, 0],
      [x0, cy + height, z0, 0, 1, 0],
      [cx, cy, cz, 0, -1, 0],
      [x0, cy, z0, 0, -1, 0],
      [x1, cy, z1, 0, -1, 0],
    ].forEach((v) => out.push(v[0], v[1], v[2], v[3], v[4], v[5], ...c));
  }
  return out;
}

function cylinderSide(cx, cy, cz, radius, height, hex, segments = 28) {
  const out = [];
  const c = color(hex);
  for (let i = 0; i < segments; i += 1) {
    const a = (i / segments) * Math.PI * 2;
    const b = ((i + 1) / segments) * Math.PI * 2;
    const x0 = cx + Math.cos(a) * radius;
    const z0 = cz + Math.sin(a) * radius;
    const x1 = cx + Math.cos(b) * radius;
    const z1 = cz + Math.sin(b) * radius;
    const n0 = [Math.cos(a), 0, Math.sin(a)];
    const n1 = [Math.cos(b), 0, Math.sin(b)];
    [
      [x0, cy, z0, ...n0],
      [x1, cy, z1, ...n1],
      [x1, cy + height, z1, ...n1],
      [x0, cy, z0, ...n0],
      [x1, cy + height, z1, ...n1],
      [x0, cy + height, z0, ...n0],
    ].forEach((v) => out.push(v[0], v[1], v[2], v[3], v[4], v[5], ...c));
  }
  return out;
}

function ellipsoid(cx, cy, cz, rx, ry, rz, hex, rings = 12, segments = 24) {
  const out = [];
  const c = color(hex);
  for (let r = 0; r < rings; r += 1) {
    const v0 = (r / rings) * Math.PI;
    const v1 = ((r + 1) / rings) * Math.PI;
    for (let s = 0; s < segments; s += 1) {
      const u0 = (s / segments) * Math.PI * 2;
      const u1 = ((s + 1) / segments) * Math.PI * 2;
      const p = [
        spherePoint(cx, cy, cz, rx, ry, rz, u0, v0),
        spherePoint(cx, cy, cz, rx, ry, rz, u1, v0),
        spherePoint(cx, cy, cz, rx, ry, rz, u1, v1),
        spherePoint(cx, cy, cz, rx, ry, rz, u0, v1),
      ];
      const n = p.map((point) => normalize([(point[0] - cx) / rx, (point[1] - cy) / ry, (point[2] - cz) / rz]));
      [0, 1, 2, 0, 2, 3].forEach((idx) => out.push(...p[idx], ...n[idx], ...c));
    }
  }
  return out;
}

function spherePoint(cx, cy, cz, rx, ry, rz, u, v) {
  return [
    cx + Math.cos(u) * Math.sin(v) * rx,
    cy + Math.cos(v) * ry,
    cz + Math.sin(u) * Math.sin(v) * rz,
  ];
}

function cone(cx, cy, cz, radius, height, hex, segments = 28) {
  const out = [];
  const c = color(hex);
  const tip = [cx, cy + height, cz];
  for (let i = 0; i < segments; i += 1) {
    const a = (i / segments) * Math.PI * 2;
    const b = ((i + 1) / segments) * Math.PI * 2;
    const p0 = [cx + Math.cos(a) * radius, cy, cz + Math.sin(a) * radius];
    const p1 = [cx + Math.cos(b) * radius, cy, cz + Math.sin(b) * radius];
    const sideN = normalize(cross([p1[0] - p0[0], 0, p1[2] - p0[2]], [tip[0] - p0[0], tip[1] - p0[1], tip[2] - p0[2]]));
    [p0, p1, tip].forEach((p) => out.push(...p, ...sideN, ...c));
    [[cx, cy, cz], p1, p0].forEach((p) => out.push(...p, 0, -1, 0, ...c));
  }
  return out;
}

function torus(cx, cy, cz, major, minor, hex, segments = 28, tube = 10) {
  const out = [];
  const c = color(hex);
  for (let i = 0; i < segments; i += 1) {
    const u0 = (i / segments) * Math.PI * 2;
    const u1 = ((i + 1) / segments) * Math.PI * 2;
    for (let j = 0; j < tube; j += 1) {
      const v0 = (j / tube) * Math.PI * 2;
      const v1 = ((j + 1) / tube) * Math.PI * 2;
      const p = [
        torusPoint(cx, cy, cz, major, minor, u0, v0),
        torusPoint(cx, cy, cz, major, minor, u1, v0),
        torusPoint(cx, cy, cz, major, minor, u1, v1),
        torusPoint(cx, cy, cz, major, minor, u0, v1),
      ];
      const n = [
        torusNormal(u0, v0),
        torusNormal(u1, v0),
        torusNormal(u1, v1),
        torusNormal(u0, v1),
      ];
      [0, 1, 2, 0, 2, 3].forEach((idx) => out.push(...p[idx], ...n[idx], ...c));
    }
  }
  return out;
}

function torusPoint(cx, cy, cz, major, minor, u, v) {
  return [
    cx + Math.cos(u) * (major + minor * Math.cos(v)),
    cy + Math.sin(u) * (major + minor * Math.cos(v)),
    cz + minor * Math.sin(v),
  ];
}

function torusNormal(u, v) {
  return normalize([Math.cos(u) * Math.cos(v), Math.sin(u) * Math.cos(v), Math.sin(v)]);
}

function torusArc(cx, cy, cz, major, minor, start, end, hex, segments = 20, tube = 8) {
  const out = [];
  const c = color(hex);
  for (let i = 0; i < segments; i += 1) {
    const u0 = start + ((end - start) * i) / segments;
    const u1 = start + ((end - start) * (i + 1)) / segments;
    for (let j = 0; j < tube; j += 1) {
      const v0 = (j / tube) * Math.PI * 2;
      const v1 = ((j + 1) / tube) * Math.PI * 2;
      const p = [
        torusPoint(cx, cy, cz, major, minor, u0, v0),
        torusPoint(cx, cy, cz, major, minor, u1, v0),
        torusPoint(cx, cy, cz, major, minor, u1, v1),
        torusPoint(cx, cy, cz, major, minor, u0, v1),
      ];
      const n = [
        torusNormal(u0, v0),
        torusNormal(u1, v0),
        torusNormal(u1, v1),
        torusNormal(u0, v1),
      ];
      [0, 1, 2, 0, 2, 3].forEach((idx) => out.push(...p[idx], ...n[idx], ...c));
    }
  }
  return out;
}

function taperedPanel(cx, topY, cz, topWidth, bottomWidth, height, depth, hex) {
  const y1 = topY;
  const y0 = topY - height;
  const z0 = cz - depth / 2;
  const z1 = cz + depth / 2;
  const topL = cx - topWidth / 2;
  const topR = cx + topWidth / 2;
  const botL = cx - bottomWidth / 2;
  const botR = cx + bottomWidth / 2;
  const c = color(hex);
  const out = [];
  pushFace(out, [[botL, y0, z1], [botR, y0, z1], [topR, y1, z1], [topL, y1, z1]], [0, 0, 1], c);
  pushFace(out, [[botR, y0, z0], [botL, y0, z0], [topL, y1, z0], [topR, y1, z0]], [0, 0, -1], c);
  pushFace(out, [[topL, y1, z0], [topL, y1, z1], [topR, y1, z1], [topR, y1, z0]], [0, 1, 0], c);
  pushFace(out, [[botL, y0, z1], [botL, y0, z0], [botR, y0, z0], [botR, y0, z1]], [0, -1, 0], c);
  pushFace(out, [[botR, y0, z1], [botR, y0, z0], [topR, y1, z0], [topR, y1, z1]], [1, 0, 0], c);
  pushFace(out, [[botL, y0, z0], [botL, y0, z1], [topL, y1, z1], [topL, y1, z0]], [-1, 0, 0], c);
  return out;
}

function torusFlat(cx, cy, cz, major, minor, hex, segments = 36, tube = 8) {
  const out = [];
  const c = color(hex);
  for (let i = 0; i < segments; i += 1) {
    const u0 = (i / segments) * Math.PI * 2;
    const u1 = ((i + 1) / segments) * Math.PI * 2;
    for (let j = 0; j < tube; j += 1) {
      const v0 = (j / tube) * Math.PI * 2;
      const v1 = ((j + 1) / tube) * Math.PI * 2;
      const p = [
        torusFlatPoint(cx, cy, cz, major, minor, u0, v0),
        torusFlatPoint(cx, cy, cz, major, minor, u1, v0),
        torusFlatPoint(cx, cy, cz, major, minor, u1, v1),
        torusFlatPoint(cx, cy, cz, major, minor, u0, v1),
      ];
      const n = [
        normalize([Math.cos(u0) * Math.cos(v0), Math.sin(v0), Math.sin(u0) * Math.cos(v0)]),
        normalize([Math.cos(u1) * Math.cos(v0), Math.sin(v0), Math.sin(u1) * Math.cos(v0)]),
        normalize([Math.cos(u1) * Math.cos(v1), Math.sin(v1), Math.sin(u1) * Math.cos(v1)]),
        normalize([Math.cos(u0) * Math.cos(v1), Math.sin(v1), Math.sin(u0) * Math.cos(v1)]),
      ];
      [0, 1, 2, 0, 2, 3].forEach((idx) => out.push(...p[idx], ...n[idx], ...c));
    }
  }
  return out;
}

function torusFlatPoint(cx, cy, cz, major, minor, u, v) {
  return [
    cx + Math.cos(u) * (major + minor * Math.cos(v)),
    cy + minor * Math.sin(v),
    cz + Math.sin(u) * (major + minor * Math.cos(v)),
  ];
}

function softShadow(cx, cy, cz, rx, rz) {
  return ellipsoid(cx, cy, cz, rx, 0.012, rz, "#6e4a32", 6, 24);
}

function makeWallArt(x, y, z, frameColor, paperColor, accentColor) {
  addMesh("small-art-frame", cuboid(x, y, z, 0.48, 0.62, 0.065, frameColor));
  addMesh("small-art-paper", cuboid(x, y, z + 0.045, 0.36, 0.48, 0.032, paperColor));
  addMesh("small-art-sun", ellipsoid(x - 0.07, y + 0.08, z + 0.072, 0.09, 0.09, 0.014, accentColor, 8, 14));
  addMesh("small-art-line-a", cuboid(x + 0.07, y - 0.06, z + 0.075, 0.18, 0.018, 0.016, "#8b785f"));
  addMesh("small-art-line-b", cuboid(x + 0.03, y - 0.15, z + 0.075, 0.24, 0.018, 0.016, "#5f5143"));
}

function makeRoom() {
  const woodA = "#cfa46c";
  const woodB = "#8c6643";
  const wall = "#d6c6ae";
  const trim = "#221e1a";

  addMesh("floor", [
    ...cuboid(0, -0.08, 0, 8.8, 0.16, 6.2, woodB),
    ...cuboid(0, 0.02, 0, 8.45, 0.08, 5.85, woodA),
  ]);

  for (let x = -3.9; x <= 3.9; x += 0.58) {
    addMesh("floor-line", cuboid(x, 0.08, 0, 0.035, 0.035, 5.75, "#6f3f25"));
  }

  addMesh("back-wall", cuboid(0, 1.7, -3.05, 8.8, 3.4, 0.22, wall));
  addMesh("right-wall", cuboid(4.3, 1.7, 0, 0.22, 3.4, 6.2, "#cbbba3"));
  addMesh("left-low-wall", cuboid(-4.3, 1.18, -1.3, 0.2, 2.36, 3.55, "#e4dbcd"));
  addMesh("baseboard-back", cuboid(0, 0.2, -2.87, 8.55, 0.18, 0.12, trim));
  addMesh("baseboard-right", cuboid(4.16, 0.2, 0, 0.12, 0.18, 5.95, trim));
  addMesh("baseboard-left", cuboid(-4.15, 0.2, -1.3, 0.12, 0.18, 3.45, trim));

  addMesh("window-recess", cuboid(2.45, 1.95, -2.83, 2.26, 1.76, 0.08, "#111111"));
  texturedPlane(
    [[1.42, 1.18, -2.75], [3.48, 1.18, -2.75], [3.48, 2.72, -2.75], [1.42, 2.72, -2.75]],
    [0, 0, 1],
    sunsetTexture,
  );
  addMesh("window-frame-top", cuboid(2.45, 2.76, -2.69, 2.2, 0.1, 0.1, "#141414"));
  addMesh("window-frame-bottom", cuboid(2.45, 1.14, -2.69, 2.2, 0.1, 0.1, "#141414"));
  addMesh("window-frame-left", cuboid(1.36, 1.95, -2.69, 0.1, 1.72, 0.1, "#141414"));
  addMesh("window-frame-right", cuboid(3.54, 1.95, -2.69, 0.1, 1.72, 0.1, "#141414"));
  addMesh("window-cross-v", cuboid(2.45, 1.95, -2.66, 0.08, 1.62, 0.08, "#141414"));
  addMesh("window-cross-h", cuboid(2.45, 1.95, -2.655, 2.08, 0.08, 0.08, "#141414"));

  makeWallArt(-2.5, 2.04, -2.56, "#111111", "#c6b89a", "#5b6f69");
  makeWallArt(-1.82, 2.04, -2.56, "#171412", "#e3d6bd", "#a96d43");
  makeWallArt(-1.14, 2.04, -2.56, "#111111", "#b9a88e", "#39423a");

  addMesh("shelf-a", cuboid(-3.45, 2.35, -2.64, 0.65, 0.05, 0.16, "#f4efe4"));
  addMesh("shelf-b", cuboid(-3.45, 1.85, -2.64, 0.65, 0.05, 0.16, "#f4efe4"));
  addMesh("shelf-book-a", cuboid(-3.55, 2.45, -2.55, 0.28, 0.12, 0.08, "#dad2c2"));
  addMesh("shelf-book-b", cuboid(-3.38, 1.95, -2.55, 0.32, 0.12, 0.08, "#c7bba6"));

  addMesh("rug", cuboid(0.7, 0.12, 0.78, 3.9, 0.045, 2.55, "#b9a88e"));
  for (let x = -0.5; x <= 2.1; x += 0.32) {
    addMesh("rug-stripe", cuboid(x, 0.16, 1.92, 0.035, 0.035, 0.35, "#8f826e"));
  }
}

function makeFurniture() {
  makeSofa();
  makeCoffeeTable();
  makeDesk();
  makeSpeakerStand();
  makeChristmasCorner();
  makePaperLantern();
  makeCoatRack();
  makeLamp();
  makePlant();
}

function makeSofa() {
  const fabric = "#e5dccb";
  const fabricDark = "#cfc5b4";
  const seam = "#a99f8f";
  const baseH = 0.28;
  const seatH = 0.24;
  const backH = 0.58;
  const armH = 0.74;
  const legH = 0.25;
  addMesh("sofa-shadow", softShadow(-1.12, shadowOn(SURFACE.rug), -1.45, 1.58, 0.68));
  addMesh("sofa-simple-base", cuboid(-1.1, cuboidOn(SURFACE.rug + legH, baseH), -1.42, 2.65, baseH, 0.72, fabricDark));
  addMesh("sofa-front-apron", cuboid(-1.1, cuboidOn(SURFACE.rug + legH + 0.03, 0.16), -1.03, 2.48, 0.16, 0.08, "#d8cebd"));
  addMesh("sofa-seat-left", cuboid(-1.72, cuboidOn(SURFACE.rug + legH + baseH - 0.03, seatH), -1.23, 1.2, seatH, 0.6, fabric));
  addMesh("sofa-seat-right", cuboid(-0.48, cuboidOn(SURFACE.rug + legH + baseH - 0.03, seatH), -1.23, 1.2, seatH, 0.6, fabric));
  addMesh("sofa-seat-seam", cuboid(-1.1, SURFACE.rug + legH + baseH + seatH - 0.02, -1.23, 0.026, 0.035, 0.48, seam));
  addMesh("sofa-back-left", cuboid(-1.72, cuboidOn(SURFACE.rug + legH + baseH + 0.03, backH), -1.78, 1.2, backH, 0.2, fabric));
  addMesh("sofa-back-right", cuboid(-0.48, cuboidOn(SURFACE.rug + legH + baseH + 0.03, backH), -1.78, 1.2, backH, 0.2, fabric));
  addMesh("sofa-back-seam", cuboid(-1.1, cuboidOn(SURFACE.rug + legH + baseH + 0.1, 0.42), -1.66, 0.028, 0.42, 0.045, seam));
  addMesh("sofa-left-arm", cuboid(-2.5, cuboidOn(SURFACE.rug + legH, armH), -1.34, 0.3, armH, 0.78, "#ddd3c2"));
  addMesh("sofa-right-arm", cuboid(0.3, cuboidOn(SURFACE.rug + legH, armH), -1.34, 0.3, armH, 0.78, "#ddd3c2"));
  addMesh("sofa-left-arm-roll", ellipsoid(-2.5, 1.16, -1.02, 0.17, 0.14, 0.16, "#eee6d8", 8, 16));
  addMesh("sofa-right-arm-roll", ellipsoid(0.3, 1.16, -1.02, 0.17, 0.14, 0.16, "#eee6d8", 8, 16));
  addMesh("pillow-square-cream", cuboid(-1.55, 1.09, -1.06, 0.34, 0.34, 0.09, "#f4ecdf"));
  addMesh("pillow-square-gold", cuboid(-0.78, 1.09, -1.06, 0.34, 0.34, 0.09, "#b98d55"));
  addMesh("sofa-leg-left", cuboid(-2.0, cuboidOn(SURFACE.rug, legH), -1.06, 0.12, legH, 0.12, "#211914"));
  addMesh("sofa-leg-right", cuboid(-0.2, cuboidOn(SURFACE.rug, legH), -1.06, 0.12, legH, 0.12, "#211914"));
}

function makeCoffeeTable() {
  const x = 0.8;
  const z = 0.52;
  const tableBottom = SURFACE.rug;
  const topH = 0.06;
  const topBottom = SURFACE.coffeeTop - topH;
  addMesh("coffee-table-shadow", softShadow(x, shadowOn(SURFACE.rug), z, 0.94, 0.64));
  addMesh("coffee-table-top", cylinder(x, cylinderOn(topBottom), z, 0.86, topH, "#25231f", 56));
  addMesh("coffee-table-rim", torusFlat(x, SURFACE.coffeeTop + 0.018, z, 0.86, 0.02, "#4b4338", 56, 8));
  const legH = topBottom - tableBottom;
  [
    [x - 0.48, z - 0.32],
    [x + 0.48, z - 0.32],
    [x - 0.48, z + 0.32],
    [x + 0.48, z + 0.32],
  ].forEach(([lx, lz]) => {
    addMesh("coffee-table-leg", cuboid(lx, cuboidOn(tableBottom, legH), lz, 0.085, legH, 0.085, "#5c3826"));
    addMesh("coffee-table-foot", cylinder(lx, cylinderOn(tableBottom), lz, 0.08, 0.025, "#251b16", 14));
  });
  addMesh("coffee-table-cross-a", cuboid(x, cuboidOn(tableBottom + 0.16, 0.045), z - 0.32, 1.0, 0.045, 0.055, "#5c3826"));
  addMesh("coffee-table-cross-b", cuboid(x, cuboidOn(tableBottom + 0.16, 0.045), z + 0.32, 1.0, 0.045, 0.055, "#5c3826"));

  const plateH = 0.035;
  const cakeH = 0.16;
  const creamH = 0.085;
  const plateBottom = SURFACE.coffeeTop;
  const plateTop = plateBottom + plateH;
  const cakeTop = plateTop + cakeH;
  const creamTop = cakeTop + creamH;
  addMesh("cake-shadow", softShadow(0.46, shadowOn(SURFACE.coffeeTop), 0.45, 0.34, 0.28));
  addMesh("cake-plate", cylinder(0.46, cylinderOn(plateBottom), 0.45, 0.32, plateH, "#f7ead7", 42));
  addMesh("cake-plate-rim", torusFlat(0.46, plateTop + 0.008, 0.45, 0.31, 0.012, "#fff5e8", 42, 6));
  addMesh("cake-plate-contact", softShadow(0.46, plateTop + 0.004, 0.45, 0.24, 0.2));
  addMesh("cake-choco-layer", cylinder(0.46, cylinderOn(plateTop), 0.45, 0.25, cakeH, "#c99142", 42));
  addMesh("cake-body-side-highlight", cylinder(0.46, cylinderOn(plateTop + 0.012), 0.45, 0.235, 0.02, "#dda958", 42));
  addMesh("cake-layer-contact", softShadow(0.46, cakeTop + 0.004, 0.45, 0.22, 0.18));
  addMesh("cake-cream-band", torusFlat(0.46, cakeTop, 0.45, 0.25, 0.018, "#fff5e8", 42, 6));
  addMesh("cake-cream-layer", cylinder(0.46, cylinderOn(cakeTop), 0.45, 0.26, creamH, "#fff4e5", 42));
  addMesh("cake-top-rim", torusFlat(0.46, creamTop + 0.008, 0.45, 0.21, 0.012, "#fffaf1", 42, 6));
  for (let i = 0; i < 8; i += 1) {
    const a = (i / 8) * Math.PI * 2;
    addMesh("cake-cream-dot", ellipsoid(0.46 + Math.cos(a) * 0.2, ellipsoidOn(creamTop - 0.002, 0.025), 0.45 + Math.sin(a) * 0.2, 0.035, 0.025, 0.035, "#fff9ef", 6, 10));
  }
  addMesh("cake-strawberry", ellipsoid(0.35, ellipsoidOn(creamTop, 0.05), 0.35, 0.055, 0.05, 0.055, "#d9545e", 8, 14));
  addMesh("cake-strawberry", ellipsoid(0.59, ellipsoidOn(creamTop, 0.05), 0.52, 0.055, 0.05, 0.055, "#d9545e", 8, 14));
  [-0.08, 0, 0.08].forEach((dx, i) => {
    addMesh("candle-contact", softShadow(0.46 + dx, creamTop + 0.006, 0.45, 0.035, 0.028));
    addMesh("candle", cylinder(0.46 + dx, cylinderOn(creamTop - 0.015), 0.45, 0.016, 0.24, ["#d9463e", "#2f7dbb", "#f0c33c"][i], 12));
    addMesh("flame", ellipsoid(0.46 + dx, ellipsoidOn(creamTop + 0.225, 0.055), 0.45, 0.036, 0.055, 0.036, "#ff8545", 8, 14));
  });

  addMesh("polaroid-shadow", softShadow(1.09, shadowOn(SURFACE.coffeeTop), 0.35, 0.26, 0.18));
  addMesh("polaroid-body", ellipsoid(1.09, ellipsoidOn(SURFACE.coffeeTop, 0.12), 0.35, 0.12, 0.13, "#f8ead8", 10, 22));
  addMesh("polaroid-face", cuboid(1.09, SURFACE.coffeeTop + 0.13, 0.49, 0.38, 0.16, 0.035, "#efe1ce"));
  addMesh("polaroid-lens", cylinder(1.0, cylinderOn(SURFACE.coffeeTop + 0.09), 0.51, 0.075, 0.04, "#22313b", 24));
  addMesh("polaroid-lens-glass", cylinder(1.0, cylinderOn(SURFACE.coffeeTop + 0.095), 0.555, 0.043, 0.025, "#6b8da2", 18));
  addMesh("polaroid-window", cuboid(1.22, SURFACE.coffeeTop + 0.17, 0.535, 0.09, 0.05, 0.035, "#8fb1bd"));
  addMesh("polaroid-dot", cylinder(1.2, cylinderOn(SURFACE.coffeeTop + 0.08), 0.54, 0.028, 0.03, "#d95b64", 16));

  addHotspot("cake", "生日蛋糕", [0.46, creamTop + 0.32, 0.45]);
  addHotspot("polaroid", "Polaroid Go Gen 3", [1.09, SURFACE.coffeeTop + 0.35, 0.35]);
}

function makeDesk() {
  const wood = "#b97843";
  const deskTopH = 0.16;
  const legH = SURFACE.deskTop - SURFACE.floor - deskTopH;
  addMesh("desk-top", cuboid(2.65, cuboidOn(SURFACE.deskTop - deskTopH, deskTopH), 1.9, 2.65, deskTopH, 0.92, wood));
  addMesh("desk-left", cuboid(1.45, cuboidOn(SURFACE.floor, legH), 1.9, 0.16, legH, 0.86, "#281c17"));
  addMesh("desk-right", cuboid(3.85, cuboidOn(SURFACE.floor, legH), 1.9, 0.16, legH, 0.86, "#281c17"));
  addMesh("desk-back-rail", cuboid(2.65, cuboidOn(SURFACE.floor + 0.4, 0.18), 1.48, 2.38, 0.18, 0.08, "#5f3823"));
  addMesh("desk-lamp-shadow", softShadow(1.64, shadowOn(SURFACE.deskTop), 1.52, 0.22, 0.17));
  addMesh("desk-lamp-base", cylinder(1.64, cylinderOn(SURFACE.deskTop + 0.01), 1.52, 0.2, 0.045, "#1f1815", 24));
  addMesh("desk-lamp", cylinder(1.64, cylinderOn(SURFACE.deskTop + 0.055), 1.52, 0.12, 0.34, "#fff2c8", 24));

  makeDeskComputer(2.2, 0.8, 1.53);
  makeDeskBooks(3.26, 0.8, 2.2);
  makeIllustratedHotCocoa(1.78, 0.8, 2.15);
  makeDetailedViking(2.68, 0.8, 2.16);
  makeNessieMagnet(3.42, 0.8, 1.72);

  addHotspot("cocoa", "挪威热可可", [1.78, 1.36, 2.15]);
  addHotspot("viking", "瑞典维京小人", [2.68, 1.48, 2.16]);
  addHotspot("magnet", "尼斯湖水怪冰箱贴", [3.42, 1.34, 1.72]);
}

function makeDeskComputer(x, tableY, z) {
  addMesh("computer-shadow", softShadow(x, tableY + 0.012, z + 0.1, 0.34, 0.18));
  addMesh("computer-base", cuboid(x, tableY + 0.035, z + 0.14, 0.48, 0.045, 0.3, "#2a2622"));
  addMesh("computer-screen", cuboid(x, tableY + 0.35, z, 0.54, 0.36, 0.045, "#191b20"));
  addMesh("computer-screen-glow", cuboid(x, tableY + 0.35, z + 0.035, 0.45, 0.27, 0.025, "#7da7b5"));
  addMesh("computer-stand", cuboid(x, tableY + 0.16, z + 0.04, 0.08, 0.22, 0.05, "#27231f"));
}

function makeDeskBooks(x, tableY, z) {
  addMesh("book-stack-shadow", softShadow(x, tableY + 0.012, z, 0.28, 0.16));
  addMesh("desk-book-a", cuboid(x, tableY + 0.035, z, 0.48, 0.07, 0.24, "#efe2c8"));
  addMesh("desk-book-a-spine", cuboid(x - 0.25, tableY + 0.075, z, 0.035, 0.08, 0.24, "#9f4a3f"));
  addMesh("desk-book-b", cuboid(x + 0.02, tableY + 0.11, z + 0.02, 0.42, 0.065, 0.22, "#4d6d78"));
  addMesh("desk-book-c", cuboid(x - 0.03, tableY + 0.175, z - 0.015, 0.38, 0.055, 0.2, "#d2a64f"));
}

function makeSpeakerStand() {
  const x = 3.35;
  const z = 0.05;
  const standTop = 1.28;
  const topH = 0.1;
  const shelfTop = 0.76;
  const legH = standTop - SURFACE.floor - topH;
  addMesh("speaker-stand-shadow", softShadow(x, shadowOn(SURFACE.floor), z, 0.55, 0.38));
  addMesh("speaker-stand-top", cuboid(x, cuboidOn(standTop - topH, topH), z, 1.0, topH, 0.44, "#5f3823"));
  addMesh("speaker-stand-lip", cuboid(x, standTop + 0.02, z - 0.24, 1.05, 0.12, 0.06, "#7b4a2f"));
  addMesh("speaker-stand-shelf", cuboid(x, cuboidOn(shelfTop - 0.08, 0.08), z, 0.86, 0.08, 0.36, "#2b211b"));
  addMesh("speaker-stand-pole", cylinder(x, cylinderOn(SURFACE.floor), z, 0.045, standTop - SURFACE.floor - topH, "#4a2e20", 12));
  addMesh("speaker-leg-a", cuboid(x - 0.42, cuboidOn(SURFACE.floor, legH), z + 0.22, 0.08, legH, 0.08, "#5f3823"));
  addMesh("speaker-leg-b", cuboid(x + 0.42, cuboidOn(SURFACE.floor, legH), z + 0.22, 0.08, legH, 0.08, "#5f3823"));
  addMesh("speaker-leg-c", cuboid(x, cuboidOn(SURFACE.floor, legH), z - 0.38, 0.08, legH, 0.08, "#5f3823"));
  addMesh("speaker-gold-feet-a", cylinder(x - 0.28, cylinderOn(standTop), z - 0.06, 0.06, 0.08, "#d6a253", 16));
  addMesh("speaker-gold-feet-b", cylinder(x + 0.28, cylinderOn(standTop), z - 0.06, 0.06, 0.08, "#d6a253", 16));
  makeActonSpeaker(x, standTop + 0.01, z);
  addMesh("speaker-cable", cuboid(x - 0.08, cuboidOn(SURFACE.floor, 1.08), z + 0.34, 0.035, 1.08, 0.035, "#161412"));
  addMesh("acton-magic-ring", torusFlat(x, SURFACE.floor + 0.02, z, 0.62, 0.018, "#f3c66b", 46, 6));
  addMesh("acton-magic-glow", ellipsoid(x, ellipsoidOn(SURFACE.floor, 0.035), z, 0.5, 0.035, 0.35, "#ffe2a0", 6, 24));
  for (let i = 0; i < 10; i += 1) {
    const a = (i / 10) * Math.PI * 2;
    addMesh("acton-magic-spark", ellipsoid(
      x + Math.cos(a) * (0.36 + (i % 3) * 0.07),
      0.38 + (i % 4) * 0.12,
      z + Math.sin(a) * 0.28,
      0.035,
      0.035,
      0.035,
      i % 2 ? "#ffe7a5" : "#f2b84c",
      6,
      10,
    ));
  }
  addHotspot("speaker", "Marshall Acton III", [x + 0.28, 1.74, z]);
}

function makeChristmasCorner() {
  makeDecoratedChristmasTree(2.68, SURFACE.floor, -1.68);
  makeLanternSnowman(2.05, SURFACE.floor, -1.28);
}

function makeDecoratedChristmasTree(x, y, z) {
  addMesh("tree-shadow", softShadow(x, shadowOn(y), z, 0.56, 0.45));
  addMesh("tree-skirt", ellipsoid(x, y + 0.04, z + 0.03, 0.46, 0.05, 0.36, "#f3eee4", 8, 24));
  addMesh("tree-basket", cylinder(x - 0.04, cylinderOn(y), z + 0.02, 0.23, 0.22, "#9b7048", 28));
  addMesh("tree-trunk", cylinder(x, cylinderOn(y + 0.2), z, 0.052, 1.28, "#543624", 12));
  const greens = ["#173927", "#1f5537", "#2f6f45", "#244c31"];
  [
    [0.58, 0.48, 0],
    [0.5, 0.82, 0.08],
    [0.42, 1.12, -0.02],
    [0.31, 1.42, 0.06],
    [0.2, 1.68, -0.02],
  ].forEach(([radius, height, offset], i) => {
    for (let j = 0; j < 9; j += 1) {
      const a = (j / 9) * Math.PI * 2 + i * 0.24;
      addMesh("tree-painted-cluster", ellipsoid(
        x + Math.cos(a) * radius * 0.36,
        y + height + Math.sin(j + i) * 0.03,
        z + offset + Math.sin(a) * radius * 0.36,
        radius * 0.36,
        0.14,
        radius * 0.18,
        greens[(i + j) % greens.length],
        8,
        14,
      ));
    }
  });
  addMesh("tree-top", cone(x, y + 1.74, z, 0.16, 0.36, "#255d39", 18));
  addMesh("tree-top-bell", ellipsoid(x, y + 2.1, z + 0.08, 0.105, 0.095, 0.105, "#d5a23f", 10, 18));
  addMesh("tree-bell-slit", cuboid(x, y + 2.07, z + 0.18, 0.04, 0.07, 0.018, "#211611"));
  [
    [-0.23, 0.67, 0.26, "#66d8ff"],
    [0.25, 0.85, 0.22, "#84e6ff"],
    [-0.05, 1.05, 0.33, "#6ddcff"],
    [0.18, 1.28, 0.24, "#8af0ff"],
    [-0.16, 1.5, 0.22, "#72ddff"],
  ].forEach(([dx, dy, dz, c]) => {
    addMesh("tree-blue-light-glow", ellipsoid(x + dx, y + dy, z + dz, 0.055, 0.055, 0.055, c, 8, 14));
  });
  [
    [-0.32, 0.7, 0.27, "#b73b35"],
    [0.28, 1.03, 0.24, "#a82f35"],
    [-0.1, 1.35, 0.3, "#d0a44b"],
    [0.08, 1.52, 0.19, "#c43d37"],
  ].forEach(([dx, dy, dz, c]) => {
    addMesh("tree-ornament", ellipsoid(x + dx, y + dy, z + dz, 0.06, 0.06, 0.06, c, 8, 14));
  });
  addMesh("christmas-stocking", ellipsoid(x - 0.33, y + 0.15, z + 0.38, 0.11, 0.28, 0.08, "#bd2f2d", 10, 16));
  addMesh("stocking-cuff", cuboid(x - 0.33, y + 0.43, z + 0.35, 0.22, 0.08, 0.1, "#f1efe7"));
}

function makeLanternSnowman(x, y, z) {
  addMesh("snowman-shadow", softShadow(x, shadowOn(y), z, 0.34, 0.28));
  addMesh("snowman-glow", ellipsoid(x, y + 0.43, z, 0.33, 0.43, 0.31, "#fff4b7", 14, 26));
  addMesh("snowman-body", ellipsoid(x, y + 0.34, z, 0.3, 0.32, 0.28, "#fff1ad", 12, 24));
  addMesh("snowman-head", ellipsoid(x, y + 0.78, z, 0.22, 0.22, 0.21, "#fff4ba", 12, 22));
  for (let i = -2; i <= 2; i += 1) {
    addMesh("snowman-paper-rib", torusFlat(x, y + 0.34 + i * 0.1, z, Math.max(0.14, 0.28 - Math.abs(i) * 0.025), 0.006, "#e4d893", 26, 5));
  }
  addMesh("snowman-hat-brim", ellipsoid(x + 0.02, y + 0.96, z, 0.24, 0.055, 0.22, "#fff2e0", 8, 20));
  addMesh("snowman-red-hat", cone(x + 0.04, y + 0.94, z, 0.22, 0.44, "#c93c3a", 24));
  addMesh("snowman-hat-pom", ellipsoid(x + 0.18, y + 1.27, z + 0.02, 0.06, 0.06, 0.06, "#f4ead9", 8, 14));
  addMesh("snowman-eye-a", ellipsoid(x - 0.075, y + 0.82, z + 0.19, 0.024, 0.032, 0.014, "#191410", 6, 10));
  addMesh("snowman-eye-b", ellipsoid(x + 0.075, y + 0.82, z + 0.19, 0.024, 0.032, 0.014, "#191410", 6, 10));
  addMesh("snowman-nose", cone(x, y + 0.76, z + 0.21, 0.038, 0.12, "#e0732e", 12));
  [-0.07, 0, 0.07].forEach((dx, i) => {
    addMesh("snowman-smile", ellipsoid(x + dx, y + 0.68 - Math.abs(i - 1) * 0.025, z + 0.205, 0.024, 0.012, 0.01, "#1d1712", 5, 8));
  });
  addMesh("snowman-scarf", torusFlat(x, y + 0.57, z, 0.19, 0.028, "#b33432", 24, 6));
  addMesh("snowman-scarf-tail", ellipsoid(x + 0.08, y + 0.37, z + 0.18, 0.055, 0.21, 0.035, "#b33432", 7, 12));
  addMesh("snowman-left-arm", ellipsoid(x - 0.28, y + 0.45, z, 0.055, 0.22, 0.045, "#f0e9d4", 7, 12));
  addMesh("snowman-right-arm", ellipsoid(x + 0.29, y + 0.47, z, 0.055, 0.22, 0.045, "#f0e9d4", 7, 12));
  addMesh("snowman-mitten", ellipsoid(x + 0.33, y + 0.59, z - 0.03, 0.07, 0.07, 0.05, "#c93c3a", 7, 12));
}

function makePaperLantern() {
  addMesh("lantern-cord", cuboid(-1.25, 2.92, -1.58, 0.025, 0.85, 0.025, "#3a332a"));
  addMesh("paper-lantern", ellipsoid(-1.25, 2.22, -1.58, 0.38, 0.38, 0.38, "#eee2c6", 14, 28));
  for (let i = -3; i <= 3; i += 1) {
    addMesh("lantern-rib", torusFlat(-1.25, 2.22 + i * 0.08, -1.58, Math.max(0.12, 0.36 - Math.abs(i) * 0.04), 0.008, "#cdbf9f", 28, 5));
  }
}

function makeIllustratedHotCocoa(x, tableY, z) {
  const saucerH = 0.028;
  const cupH = 0.26;
  const saucerBottom = tableY;
  const saucerTop = saucerBottom + saucerH;
  const cupBottom = saucerTop;
  const cupTop = cupBottom + cupH;
  const liquidY = cupTop - 0.034;

  addMesh("cocoa-shadow", softShadow(x, shadowOn(tableY), z, 0.24, 0.18));
  addMesh("cocoa-saucer", cylinder(x, cylinderOn(saucerBottom), z, 0.22, saucerH, "#e9e1d4", 44));
  addMesh("cocoa-saucer-rim", torusFlat(x, saucerTop + 0.006, z, 0.18, 0.012, "#f8f3ea", 44, 6));
  addMesh("cocoa-saucer-well", torusFlat(x, saucerTop + 0.01, z, 0.112, 0.008, "#d6ccbf", 40, 5));

  addMesh("cocoa-cup-contact", softShadow(x, saucerTop + 0.004, z, 0.13, 0.1));
  addMesh("cocoa-cup-bottom-disk", cylinder(x, cylinderOn(cupBottom), z, 0.122, 0.018, "#f6f2e9", 44));
  addMesh("cocoa-cup-body", cylinderSide(x, cylinderOn(cupBottom), z, 0.145, cupH, "#f6f2e9", 44));
  addMesh("cocoa-cup-bottom-round", torusFlat(x, cupBottom + 0.018, z, 0.12, 0.018, "#e8e1d6", 40, 6));
  addMesh("cocoa-cup-rim", torusFlat(x, cupTop + 0.006, z, 0.146, 0.018, "#fffdf7", 44, 7));
  addMesh("cocoa-inner-wall", cylinderSide(x, cylinderOn(cupTop - 0.055), z, 0.118, 0.045, "#d8d0c5", 40));
  addMesh("cocoa-liquid", cylinder(x, cylinderOn(liquidY), z, 0.106, 0.02, "#6f432f", 40));
  addMesh("cocoa-liquid-highlight", ellipsoid(x - 0.04, liquidY + 0.024, z + 0.035, 0.035, 0.008, 0.018, "#9d694a", 6, 10));

  addMesh("cocoa-handle-arc", torusArc(x + 0.19, cupBottom + 0.15, z, 0.095, 0.016, -Math.PI * 0.62, Math.PI * 0.62, "#f6f2e9", 24, 7));
  addMesh("cocoa-handle-top-joint", ellipsoid(x + 0.15, cupBottom + 0.215, z, 0.035, 0.035, 0.026, "#f6f2e9", 7, 12));
  addMesh("cocoa-handle-bottom-joint", ellipsoid(x + 0.15, cupBottom + 0.085, z, 0.035, 0.035, 0.026, "#f6f2e9", 7, 12));
}

function makeDetailedViking(x, tableY, z) {
  addMesh("viking-shadow", softShadow(x, tableY + 0.012, z, 0.2, 0.15));
  addMesh("viking-left-foot", ellipsoid(x - 0.07, tableY + 0.045, z, 0.065, 0.035, 0.07, "#9b7048", 7, 12));
  addMesh("viking-right-foot", ellipsoid(x + 0.07, tableY + 0.045, z, 0.065, 0.035, 0.07, "#9b7048", 7, 12));
  addMesh("viking-cloth-body", ellipsoid(x, tableY + 0.22, z, 0.15, 0.2, 0.115, "#d9c8a9", 10, 18));
  addMesh("viking-cloth-weave-a", cuboid(x - 0.04, tableY + 0.23, z + 0.11, 0.018, 0.29, 0.012, "#b9a17d"));
  addMesh("viking-cloth-weave-b", cuboid(x + 0.045, tableY + 0.21, z + 0.11, 0.018, 0.26, 0.012, "#b9a17d"));
  addMesh("viking-head", ellipsoid(x, tableY + 0.48, z, 0.145, 0.15, 0.13, "#d7a679", 12, 22));
  addMesh("viking-nose", ellipsoid(x, tableY + 0.46, z + 0.12, 0.035, 0.045, 0.02, "#c89268", 7, 10));
  addMesh("viking-eye-left-white", ellipsoid(x - 0.055, tableY + 0.53, z + 0.115, 0.035, 0.035, 0.014, "#fff8ef", 7, 10));
  addMesh("viking-eye-right-white", ellipsoid(x + 0.055, tableY + 0.53, z + 0.115, 0.035, 0.035, 0.014, "#fff8ef", 7, 10));
  addMesh("viking-eye-left", ellipsoid(x - 0.055, tableY + 0.53, z + 0.128, 0.018, 0.02, 0.009, "#14110f", 6, 8));
  addMesh("viking-eye-right", ellipsoid(x + 0.055, tableY + 0.53, z + 0.128, 0.018, 0.02, 0.009, "#14110f", 6, 8));
  addMesh("viking-cheek-left", ellipsoid(x - 0.1, tableY + 0.455, z + 0.12, 0.035, 0.025, 0.012, "#d77d74", 6, 10));
  addMesh("viking-cheek-right", ellipsoid(x + 0.1, tableY + 0.455, z + 0.12, 0.035, 0.025, 0.012, "#d77d74", 6, 10));
  addMesh("viking-mouth-left", ellipsoid(x - 0.03, tableY + 0.405, z + 0.125, 0.022, 0.008, 0.006, "#3f2b20", 4, 6));
  addMesh("viking-mouth-right", ellipsoid(x + 0.03, tableY + 0.405, z + 0.125, 0.022, 0.008, 0.006, "#3f2b20", 4, 6));
  addMesh("viking-helmet", ellipsoid(x, tableY + 0.615, z, 0.15, 0.082, 0.14, "#b7b1a4", 8, 20));
  addMesh("viking-helmet-band", torusFlat(x, tableY + 0.58, z, 0.142, 0.014, "#9a6838", 24, 6));
  addMesh("viking-helmet-strap", cuboid(x, tableY + 0.64, z + 0.12, 0.035, 0.17, 0.018, "#9a6838"));
  addMesh("viking-horn-left", ellipsoid(x - 0.165, tableY + 0.64, z, 0.11, 0.045, 0.035, "#f0dfbd", 8, 14));
  addMesh("viking-horn-right", ellipsoid(x + 0.165, tableY + 0.64, z, 0.11, 0.045, 0.035, "#f0dfbd", 8, 14));
  addMesh("viking-horn-left-tip", ellipsoid(x - 0.245, tableY + 0.665, z, 0.035, 0.022, 0.018, "#a46438", 6, 10));
  addMesh("viking-horn-right-tip", ellipsoid(x + 0.245, tableY + 0.665, z, 0.035, 0.022, 0.018, "#a46438", 6, 10));
  addMesh("viking-red-braid-left", ellipsoid(x - 0.13, tableY + 0.41, z - 0.03, 0.035, 0.085, 0.025, "#c53325", 7, 10));
  addMesh("viking-red-braid-right", ellipsoid(x + 0.13, tableY + 0.41, z - 0.03, 0.035, 0.085, 0.025, "#c53325", 7, 10));
  for (let i = 0; i < 8; i += 1) {
    addMesh("viking-spear", ellipsoid(x - 0.12 + i * 0.04, tableY + 0.18 + i * 0.065, z + 0.14, 0.025, 0.025, 0.025, "#d6b07b", 5, 8));
  }
  addMesh("viking-spear-tip", ellipsoid(x + 0.22, tableY + 0.72, z + 0.14, 0.035, 0.055, 0.022, "#ecece8", 5, 8));
}

function makeNessieMagnet(x, tableY, z) {
  addMesh("magnet-shadow", softShadow(x, tableY + 0.012, z, 0.2, 0.12));
  addMesh("magnet-card", cuboid(x, tableY + 0.2, z, 0.24, 0.34, 0.045, "#2c354f"));
  addMesh("magnet-border", cuboid(x, tableY + 0.2, z + 0.032, 0.19, 0.27, 0.03, "#f2e7d4"));
  addMesh("nessie-body", ellipsoid(x - 0.025, tableY + 0.19, z + 0.06, 0.075, 0.035, 0.018, "#63a278", 7, 14));
  addMesh("nessie-neck", ellipsoid(x + 0.055, tableY + 0.245, z + 0.062, 0.027, 0.075, 0.018, "#63a278", 7, 12));
  addMesh("nessie-head", ellipsoid(x + 0.08, tableY + 0.31, z + 0.062, 0.035, 0.03, 0.018, "#63a278", 7, 12));
}

function makeActonSpeaker(x, tableY, z) {
  addMesh("speaker-shadow", softShadow(x, tableY + 0.012, z, 0.34, 0.22));
  addMesh("speaker-soft-box", ellipsoid(x, tableY + 0.2, z, 0.31, 0.19, 0.16, "#191716", 10, 22));
  addMesh("speaker-front", cuboid(x, tableY + 0.2, z + 0.165, 0.46, 0.25, 0.035, "#34322e"));
  for (let i = -3; i <= 3; i += 1) {
    addMesh("speaker-grill-line", cuboid(x, tableY + 0.2 + i * 0.03, z + 0.19, 0.42, 0.008, 0.012, "#c7bca6"));
  }
  addMesh("speaker-gold-line", cuboid(x, tableY + 0.07, z + 0.205, 0.42, 0.02, 0.018, "#d6a253"));
  addMesh("speaker-knob-a", cylinder(x - 0.12, tableY + 0.39, z, 0.035, 0.025, "#d6a253", 16));
  addMesh("speaker-knob-b", cylinder(x, tableY + 0.39, z, 0.035, 0.025, "#d6a253", 16));
  addMesh("speaker-knob-c", cylinder(x + 0.12, tableY + 0.39, z, 0.035, 0.025, "#d6a253", 16));
}

function makeHanger(x, railY, z, width) {
  addMesh("hanger-hook", torusArc(x, railY + 0.01, z, 0.045, 0.008, Math.PI * 0.05, Math.PI * 1.2, "#8a643f", 14, 5));
  addMesh("hanger-neck", cuboid(x, railY - 0.035, z, 0.025, 0.09, 0.026, "#8a643f"));
  addMesh("hanger-bar", cuboid(x, railY - 0.105, z, width, 0.028, 0.032, "#8a643f"));
  addMesh("hanger-left-slope", taperedPanel(x - width * 0.2, railY - 0.03, z, 0.035, 0.025, 0.14, 0.028, "#8a643f"));
  addMesh("hanger-right-slope", taperedPanel(x + width * 0.2, railY - 0.03, z, 0.035, 0.025, 0.14, 0.028, "#8a643f"));
}

function makeHangingCoat(x, railY, z, fabric) {
  const shoulderY = railY - 0.16;
  const hemY = shoulderY - 0.76;
  const dark = fabric === "#53636b" ? "#33424a" : "#2c332e";
  makeHanger(x, railY, z, 0.42);
  addMesh("coat-shoulder-pad", cuboid(x, shoulderY + 0.035, z, 0.48, 0.075, 0.11, fabric));
  addMesh("coat-back-panel", taperedPanel(x, shoulderY, z, 0.45, 0.56, 0.76, 0.1, fabric));
  addMesh("coat-front-left", taperedPanel(x - 0.12, shoulderY - 0.025, z + 0.055, 0.2, 0.25, 0.69, 0.035, fabric));
  addMesh("coat-front-right", taperedPanel(x + 0.12, shoulderY - 0.025, z + 0.055, 0.2, 0.25, 0.69, 0.035, fabric));
  addMesh("coat-left-sleeve", taperedPanel(x - 0.33, shoulderY - 0.02, z, 0.16, 0.2, 0.58, 0.075, fabric));
  addMesh("coat-right-sleeve", taperedPanel(x + 0.33, shoulderY - 0.02, z, 0.16, 0.2, 0.58, 0.075, fabric));
  addMesh("coat-left-cuff", cuboid(x - 0.33, hemY + 0.18, z + 0.01, 0.21, 0.045, 0.09, dark));
  addMesh("coat-right-cuff", cuboid(x + 0.33, hemY + 0.18, z + 0.01, 0.21, 0.045, 0.09, dark));
  addMesh("coat-hem", cuboid(x, hemY, z + 0.055, 0.58, 0.045, 0.045, dark));
  addMesh("coat-center-opening", cuboid(x, shoulderY - 0.36, z + 0.079, 0.028, 0.62, 0.02, dark));
  addMesh("coat-collar-left", cuboid(x - 0.06, shoulderY + 0.04, z + 0.075, 0.13, 0.09, 0.035, "#f2eadb"));
  addMesh("coat-collar-right", cuboid(x + 0.06, shoulderY + 0.04, z + 0.075, 0.13, 0.09, 0.035, "#f2eadb"));
}

function makeHangingShirt(x, railY, z, fabric) {
  const shoulderY = railY - 0.15;
  const hemY = shoulderY - 0.42;
  makeHanger(x, railY, z, 0.36);
  addMesh("shirt-shoulders", cuboid(x, shoulderY + 0.025, z, 0.43, 0.06, 0.075, fabric));
  addMesh("shirt-body-panel", taperedPanel(x, shoulderY, z, 0.38, 0.42, 0.42, 0.075, fabric));
  addMesh("shirt-left-sleeve", taperedPanel(x - 0.28, shoulderY - 0.02, z, 0.18, 0.15, 0.2, 0.065, fabric));
  addMesh("shirt-right-sleeve", taperedPanel(x + 0.28, shoulderY - 0.02, z, 0.18, 0.15, 0.2, 0.065, fabric));
  addMesh("shirt-neck-hole", ellipsoid(x, shoulderY + 0.015, z + 0.05, 0.075, 0.035, 0.018, "#f8ead4", 6, 10));
  addMesh("shirt-hem", cuboid(x, hemY, z + 0.04, 0.43, 0.035, 0.035, "#d58a86"));
}

function makeCoatRack() {
  const baseH = 0.08;
  addMesh("rack-shadow", softShadow(-3.18, shadowOn(SURFACE.floor), 0.72, 0.5, 0.34));
  addMesh("rack-base", cylinder(-3.2, cylinderOn(SURFACE.floor), 0.72, 0.34, baseH, "#5c3d28", 24));
  addMesh("rack-pole", cylinder(-3.2, cylinderOn(SURFACE.floor + baseH), 0.72, 0.04, 1.78, "#5c3d28", 14));
  addMesh("rack-rail", cuboid(-3.14, 1.82, 0.72, 0.96, 0.055, 0.055, "#5c3d28"));
  addMesh("rack-rail-end-left", ellipsoid(-3.62, 1.82, 0.72, 0.055, 0.055, 0.055, "#6b472f", 6, 10));
  addMesh("rack-rail-end-right", ellipsoid(-2.66, 1.82, 0.72, 0.055, 0.055, 0.055, "#6b472f", 6, 10));
  makeHangingCoat(-3.46, 1.82, 0.62, "#53636b");
  makeHangingCoat(-3.16, 1.8, 0.78, "#414941");
  makeHangingShirt(-2.84, 1.78, 0.54, "#e8a5a0");
  addHotspot("skiptonCoats", "Skipton 外套", [-3.3, 1.36, 0.7]);
  addHotspot("koreaShirt", "韩国短袖", [-2.84, 1.36, 0.54]);
}

function makeLamp() {
  addMesh("floor-lamp-shade", cylinder(-3.2, 1.26, -1.68, 0.28, 0.34, "#151414", 28));
  addMesh("floor-lamp-light", cylinder(-3.2, 1.2, -1.68, 0.18, 0.12, "#fff1bd", 28));
  addMesh("floor-lamp-stem-a", cuboid(-3.28, 0.64, -1.68, 0.05, 1.25, 0.05, "#6a412b"));
  addMesh("floor-lamp-stem-b", cuboid(-3.08, 0.64, -1.68, 0.05, 1.25, 0.05, "#6a412b"));
}

function makePlant() {
  addMesh("plant-pot", cylinder(3.05, 0.16, -1.65, 0.24, 0.34, "#1f1a18", 24));
  [
    [3.05, 0.62, -1.62, 0.09, 0.7, 0.05],
    [2.86, 0.56, -1.62, 0.08, 0.64, 0.05],
    [3.22, 0.56, -1.54, 0.08, 0.58, 0.05],
    [3.1, 0.64, -1.82, 0.08, 0.72, 0.05],
  ].forEach((leaf) => addMesh("leaf", cuboid(...leaf, "#4f8b6b")));
}

function addHotspot(key, label, worldPosition) {
  const button = document.createElement("button");
  button.className = "hotspot";
  button.type = "button";
  button.dataset.memory = key;
  button.setAttribute("aria-label", label);
  button.innerHTML = `<span>${label}</span>`;
  button.style.setProperty("--x", "0px");
  button.style.setProperty("--y", "0px");
  button.style.setProperty("--s", "1");
  button.addEventListener("click", () => openMemory(key));
  hotspotLayer.append(button);
  hotspots.push({ key, button, worldPosition });
}

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, Math.floor(rect.width * dpr));
  const height = Math.max(1, Math.floor(rect.height * dpr));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  gl.viewport(0, 0, canvas.width, canvas.height);
}

function render() {
  resize();
  gl.enable(gl.DEPTH_TEST);
  gl.disable(gl.CULL_FACE);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.useProgram(program);
  gl.uniform3fv(locations.lightDir, new Float32Array([-0.35, 0.82, 0.44]));

  const aspect = canvas.width / canvas.height;
  const projection = mat4Perspective(Math.PI / 4.4, aspect, 0.1, 100);
  const eye = [
    Math.sin(yaw) * Math.cos(pitch) * distance,
    Math.sin(pitch) * distance + 2.6,
    Math.cos(yaw) * Math.cos(pitch) * distance,
  ];
  const view = mat4LookAt(eye, [0, 0.8, 0], [0, 1, 0]);
  viewProjection = mat4Multiply(projection, view);
  const reveal = speakerRevealAmount();

  sceneObjects.forEach((object) => {
    const isSpeakerPiece = object.name.startsWith("speaker");
    const isMagicPiece = object.name.startsWith("acton-magic");
    if (isSpeakerPiece && reveal <= 0.01) return;
    if (isMagicPiece && (!speakerRevealStartedAt || reveal >= 0.99)) return;

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, object.buffer, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(locations.position);
    gl.enableVertexAttribArray(locations.normal);
    gl.enableVertexAttribArray(locations.color);
    gl.vertexAttribPointer(locations.position, 3, gl.FLOAT, false, object.stride, 0);
    gl.vertexAttribPointer(locations.normal, 3, gl.FLOAT, false, object.stride, 12);
    gl.vertexAttribPointer(locations.color, 3, gl.FLOAT, false, object.stride, 24);
    if (object.texture) {
      gl.enableVertexAttribArray(locations.texCoord);
      gl.vertexAttribPointer(locations.texCoord, 2, gl.FLOAT, false, object.stride, 36);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, object.texture);
      gl.uniform1i(locations.texture, 0);
      gl.uniform1f(locations.useTexture, 1);
    } else {
      gl.disableVertexAttribArray(locations.texCoord);
      gl.vertexAttrib2f(locations.texCoord, 0, 0);
      gl.uniform1f(locations.useTexture, 0);
    }
    let model = object.model;
    if (isSpeakerPiece) {
      const rise = (Math.min(1, reveal) - 1) * 1.18;
      model = mat4Multiply(mat4Translate(0, rise, 0), model);
    }
    if (isMagicPiece) {
      const sparkleLift = Math.sin(performance.now() * 0.004 + object.count) * 0.04;
      model = mat4Multiply(mat4Translate(0, sparkleLift, 0), model);
    }
    const matrix = mat4Multiply(viewProjection, model);
    gl.uniformMatrix4fv(locations.matrix, false, matrix);
    gl.uniformMatrix4fv(locations.model, false, model);
    gl.drawArrays(gl.TRIANGLES, 0, object.count);
  });

  updateHotspots();
  requestAnimationFrame(render);
}

function updateHotspots() {
  const rect = canvas.getBoundingClientRect();
  const reveal = speakerRevealAmount();
  hotspots.forEach((spot) => {
    if (spot.key === "speaker" && reveal < 0.92) {
      spot.button.hidden = true;
      return;
    }
    const projected = project(spot.worldPosition, viewProjection, rect.width, rect.height);
    if (!projected.visible) {
      spot.button.hidden = true;
      return;
    }
    spot.button.hidden = false;
    spot.button.style.setProperty("--x", `${projected.x}px`);
    spot.button.style.setProperty("--y", `${projected.y}px`);
    spot.button.style.setProperty("--s", `${projected.scale}`);
  });
}

function project(point, matrix, width, height) {
  const [x, y, z] = point;
  const w =
    matrix[3] * x +
    matrix[7] * y +
    matrix[11] * z +
    matrix[15];
  if (w <= 0) return { visible: false };
  const nx = (matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12]) / w;
  const ny = (matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13]) / w;
  const nz = (matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14]) / w;
  const visible = nx > -1.15 && nx < 1.15 && ny > -1.15 && ny < 1.15 && nz > -1 && nz < 1;
  return {
    visible,
    x: (nx * 0.5 + 0.5) * width,
    y: (-ny * 0.5 + 0.5) * height,
    scale: Math.max(0.72, Math.min(1.15, 1.15 - nz * 0.28)),
  };
}

function openWorld() {
  world.classList.add("is-open");
  startOpeningIntro();
  playBgm();
}

function startOpeningIntro() {
  if (introStarted) return;
  introStarted = true;
  introComplete = false;
  openingIntroCopy.replaceChildren();
  openingIntroCopy.classList.remove("is-visible");
  introTimerIds.forEach((timerId) => window.clearTimeout(timerId));
  introTimerIds = [];
  openingIntroParagraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.innerText = paragraph;
    openingIntroCopy.append(p);
  });
  introTimerIds.push(window.setTimeout(() => {
    openingIntroCopy.classList.add("is-visible");
  }, 180));
  introTimerIds.push(window.setTimeout(() => {
    introComplete = true;
  }, 1600));
  world.classList.add("is-intro");
}

function completeOpeningIntro() {
  introTimerIds.forEach((timerId) => window.clearTimeout(timerId));
  introTimerIds = [];
  openingIntroCopy.classList.add("is-visible");
  introComplete = true;
}

function enterRoomFromIntro() {
  world.classList.remove("is-intro");
  window.setTimeout(resize, 60);
  window.setTimeout(resize, 360);
}

function handleOpeningIntroClick() {
  if (!introComplete) {
    completeOpeningIntro();
    return;
  }
  enterRoomFromIntro();
}

function playBgm() {
  bgm.volume = 0.56;
  bgm.play()
    .then(() => {
      bgmReady = true;
      bgmToggle.classList.add("is-on");
      bgmToggle.setAttribute("aria-label", "暂停背景音乐");
    })
    .catch(() => {
      bgmReady = false;
      bgmToggle.classList.remove("is-on");
      bgmToggle.setAttribute("aria-label", "播放背景音乐");
    });
}

function toggleBgm() {
  if (bgm.paused) {
    playBgm();
  } else {
    bgm.pause();
    bgmReady = false;
    bgmToggle.classList.remove("is-on");
    bgmToggle.setAttribute("aria-label", "播放背景音乐");
  }
}

function makePhoto(src, index) {
  const figure = document.createElement("figure");
  figure.className = "photo-card";
  figure.style.setProperty("--tilt", `${[-1.4, 0.8, -0.6, 1.2][index % 4]}deg`);
  const img = document.createElement("img");
  img.src = encodeURI(src);
  img.alt = "旅行照片";
  img.loading = index < 3 ? "eager" : "lazy";
  figure.append(img);
  return figure;
}

function makeNote(text) {
  const card = document.createElement("div");
  card.className = "note-card";
  card.innerText = text;
  return card;
}

function makeGift(image, text) {
  const card = document.createElement("div");
  card.className = "gift-card";
  const img = document.createElement("img");
  img.src = encodeURI(image);
  img.alt = "Marshall Acton III";
  const copy = document.createElement("p");
  copy.innerText = text;
  card.append(img, copy);
  return card;
}

function makeLetter(paragraphs) {
  const letter = document.createElement("article");
  letter.className = "cake-letter";
  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.innerText = paragraph;
    letter.append(p);
  });
  return letter;
}

function makeCakeGift(text, letterParagraphs = []) {
  const card = document.createElement("div");
  card.className = "cake-gift-card";
  const cake = document.createElement("div");
  cake.className = "modal-cake";
  cake.setAttribute("aria-hidden", "true");
  cake.innerHTML = `
    <span class="modal-cake__plate"></span>
    <span class="modal-cake__base"></span>
    <span class="modal-cake__cream"></span>
    <span class="modal-cake__top"></span>
    <span class="modal-cake__candle modal-cake__candle--one"></span>
    <span class="modal-cake__candle modal-cake__candle--two"></span>
    <span class="modal-cake__candle modal-cake__candle--three"></span>
    <span class="modal-cake__flame modal-cake__flame--one"></span>
    <span class="modal-cake__flame modal-cake__flame--two"></span>
    <span class="modal-cake__flame modal-cake__flame--three"></span>
  `;
  const copy = document.createElement("p");
  copy.innerText = text;
  card.append(cake, copy);
  const fragment = document.createDocumentFragment();
  fragment.append(card);
  if (letterParagraphs.length) {
    fragment.append(makeLetter(letterParagraphs));
  }
  return fragment;
}

function openMemory(key) {
  const memory = memories[key];
  if (!memory) return;
  markMemorySeen(key);
  dialog.classList.remove("is-compact", "is-gallery", "is-letter");
  if (key === "cake") {
    dialog.classList.add("is-letter");
  } else {
    dialog.classList.add(memory.photos ? "is-gallery" : "is-compact");
  }
  memoryKicker.textContent = memory.kicker;
  memoryTitle.textContent = memory.title;
  memoryText.textContent = memory.text;
  memoryGallery.replaceChildren();

  if (key === "cake") {
    memoryGallery.append(makeCakeGift(memory.note || memory.text, memory.letter || []));
  } else if (memory.image) {
    memoryGallery.append(makeGift(memory.image, memory.note || memory.text));
  } else if (memory.note) {
    memoryGallery.append(makeNote(memory.note));
  }

  (memory.photos || []).forEach((src, index) => {
    memoryGallery.append(makePhoto(src, index));
  });

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function resetCamera() {
  yaw = -0.72;
  pitch = 0.54;
  distance = window.matchMedia("(max-width: 720px)").matches ? 15.6 : 11.8;
}

function mat4Identity() {
  return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}

function mat4Perspective(fov, aspect, near, far) {
  const f = 1 / Math.tan(fov / 2);
  const nf = 1 / (near - far);
  return new Float32Array([
    f / aspect,
    0,
    0,
    0,
    0,
    f,
    0,
    0,
    0,
    0,
    (far + near) * nf,
    -1,
    0,
    0,
    2 * far * near * nf,
    0,
  ]);
}

function mat4LookAt(eye, center, up) {
  const z = normalize([eye[0] - center[0], eye[1] - center[1], eye[2] - center[2]]);
  const x = normalize(cross(up, z));
  const y = cross(z, x);
  return new Float32Array([
    x[0],
    y[0],
    z[0],
    0,
    x[1],
    y[1],
    z[1],
    0,
    x[2],
    y[2],
    z[2],
    0,
    -dot(x, eye),
    -dot(y, eye),
    -dot(z, eye),
    1,
  ]);
}

function mat4Multiply(a, b) {
  const out = new Float32Array(16);
  for (let row = 0; row < 4; row += 1) {
    for (let col = 0; col < 4; col += 1) {
      out[col * 4 + row] =
        a[0 * 4 + row] * b[col * 4 + 0] +
        a[1 * 4 + row] * b[col * 4 + 1] +
        a[2 * 4 + row] * b[col * 4 + 2] +
        a[3 * 4 + row] * b[col * 4 + 3];
    }
  }
  return out;
}

function mat4Translate(x, y, z) {
  return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
}

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function normalize(v) {
  const len = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / len, v[1] / len, v[2] / len];
}

greetingCard.addEventListener("click", openWorld);
openingIntro.addEventListener("click", handleOpeningIntroClick);
openingIntroEnter.addEventListener("click", (event) => {
  event.stopPropagation();
  handleOpeningIntroClick();
});
bgmToggle.addEventListener("click", toggleBgm);
resetView.addEventListener("click", resetCamera);
closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", revealPendingActonGift);

canvas.addEventListener("pointerdown", (event) => {
  isDragging = true;
  lastPointer = { x: event.clientX, y: event.clientY };
  canvas.classList.add("is-dragging");
  canvas.setPointerCapture(event.pointerId);
});

canvas.addEventListener("pointermove", (event) => {
  if (!isDragging) return;
  const dx = event.clientX - lastPointer.x;
  const dy = event.clientY - lastPointer.y;
  lastPointer = { x: event.clientX, y: event.clientY };
  yaw += dx * 0.008;
  pitch = Math.max(0.24, Math.min(0.82, pitch + dy * 0.006));
});

canvas.addEventListener("pointerup", (event) => {
  isDragging = false;
  canvas.classList.remove("is-dragging");
  if (canvas.hasPointerCapture(event.pointerId)) {
    canvas.releasePointerCapture(event.pointerId);
  }
});

canvas.addEventListener("wheel", (event) => {
  event.preventDefault();
  distance = Math.max(8.2, Math.min(15.6, distance + event.deltaY * 0.01));
}, { passive: false });

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 720px)").matches && distance < 14.8) {
    distance = 15.6;
  }
});

makeRoom();
makeFurniture();
resetCamera();
render();
