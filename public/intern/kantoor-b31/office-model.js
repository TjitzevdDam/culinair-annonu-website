// Geometry + materials for the Unit B31 office building, built from the same
// plan data as the original 2D drawing. Coordinates: x 0..W, z 0..D, y up from
// each floor's own zero. Centered on export via cx()/cz().
export function buildScene(THREE) {
  const W = 6.0, D = 8.5, H0 = 3.2, H1 = 2.6, SLAB = 0.22;
  const Y1 = H0 + SLAB;
  const cx = v => v - W / 2, cz = v => v - D / 2;

  const mat = (o) => new THREE.MeshStandardMaterial(o);
  const M = {
    concrete: mat({ color: '#cdcac1', roughness: 0.88, metalness: 0.0 }),
    woodFloor: mat({ color: '#dcc49e', roughness: 0.35, metalness: 0.0 }),
    wallPaint: mat({ color: '#f5f3ed', roughness: 0.92, metalness: 0.0 }),
    wallDark: mat({ color: '#8f8d85', roughness: 0.85, metalness: 0.0 }),
    ceiling: mat({ color: '#e9e7df', roughness: 0.95, metalness: 0.0 }),
    cabinet: mat({ color: '#eeece5', roughness: 0.5, metalness: 0.0 }),
    cabinetFront: mat({ color: '#f7f5f0', roughness: 0.4, metalness: 0.0 }),
    counter: mat({ color: '#2c2a26', roughness: 0.35, metalness: 0.08 }),
    steel: mat({ color: '#c7cacb', roughness: 0.4, metalness: 0.35 }),
    steelDark: mat({ color: '#6a6c6f', roughness: 0.45, metalness: 0.35 }),
    alu: mat({ color: '#eceeee', roughness: 0.4, metalness: 0.25, transparent: true, opacity: 0.85 }),
    glass: mat({ color: '#cfe6ea', roughness: 0.05, metalness: 0.0, transparent: true, opacity: 0.16, side: THREE.DoubleSide }),
    rack: mat({ color: '#8e979f', roughness: 0.45, metalness: 0.35 }),
    rackShelf: mat({ color: '#c6cbd0', roughness: 0.5, metalness: 0.3 }),
    corpus: mat({ color: '#e6e3db', roughness: 0.6, metalness: 0.0 }),
    doorFront: mat({ color: '#f4f2ec', roughness: 0.45, metalness: 0.0 }),
    cork: mat({ color: '#c09a68', roughness: 0.85, metalness: 0.0 }),
    whiteboard: mat({ color: '#fbfbf9', roughness: 0.15, metalness: 0.0 }),
    kallax: mat({ color: '#efece4', roughness: 0.55, metalness: 0.0 }),
    kallaxFront: mat({ color: '#ffffff', roughness: 0.4, metalness: 0.0 }),
    deskTop: mat({ color: '#efede6', roughness: 0.5, metalness: 0.0 }),
    oak: mat({ color: '#b98a52', roughness: 0.55, metalness: 0.0 }),
    slat: mat({ color: '#9a6b3c', roughness: 0.6, metalness: 0.0 }),
    slatBack: mat({ color: '#5c4028', roughness: 0.75, metalness: 0.0 }),
    pinboard: mat({ color: '#eda100', roughness: 0.7, metalness: 0.0 }),
    plant: mat({ color: '#3f7a4a', roughness: 0.85, metalness: 0.0 }),
    plantLight: mat({ color: '#5a9660', roughness: 0.85, metalness: 0.0 }),
    pot: mat({ color: '#a8a29a', roughness: 0.7, metalness: 0.0 }),
    tealWall: mat({ color: '#2f9aa1', roughness: 0.88, metalness: 0.0 }),
    mustard: mat({ color: '#d9a441', roughness: 0.6, metalness: 0.0 }),
    screen: mat({ color: '#232528', roughness: 0.3, metalness: 0.1 }),
    fabric: mat({ color: '#5d6b7a', roughness: 0.85, metalness: 0.0 }),
    crate: mat({ color: '#1f2022', roughness: 0.45, metalness: 0.0 }),
    book1: mat({ color: '#9a5b46', roughness: 0.7, metalness: 0.0 }),
    book2: mat({ color: '#3d5a4c', roughness: 0.7, metalness: 0.0 }),
    stairWood: mat({ color: '#c9a06a', roughness: 0.45, metalness: 0.0 }),
    teal: mat({ color: '#26A8B0', roughness: 0.4, metalness: 0.05 }),
  };

  const group = new THREE.Group();
  const ground = new THREE.Group(); ground.name = 'ground'; group.add(ground);
  const upper = new THREE.Group(); upper.name = 'upper'; group.add(upper);
  const slab = new THREE.Group(); slab.name = 'slab'; group.add(slab);

  function box(t, m, x, y, z, w, h, d) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(Math.max(w, 0.01), Math.max(h, 0.01), Math.max(d, 0.01)), m);
    mesh.position.set(cx(x) + w / 2, y + h / 2, cz(z) + d / 2);
    mesh.castShadow = true; mesh.receiveShadow = true;
    t.add(mesh); return mesh;
  }
  function cyl(t, m, x, y, z, r, h, segs = 16) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, segs), m);
    mesh.position.set(cx(x), y + h / 2, cz(z));
    mesh.castShadow = true; mesh.receiveShadow = true;
    t.add(mesh); return mesh;
  }

  const logoTex = new THREE.TextureLoader().load('/intern/kantoor-b31/uploads/CQ%20Logo%20RGB.png');
  logoTex.colorSpace = THREE.SRGBColorSpace;
  function logoPanel(t, x, z, w, d, h, y, face) {
    box(t, M.whiteboard, x, y, z, w, h, d);
    const lw = w * 0.86, lh = lw / 3.46;
    const pm = new THREE.MeshStandardMaterial({ map: logoTex, transparent: true, roughness: 0.6, metalness: 0 });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(lw, lh), pm);
    if (face === 'z+') { plane.position.set(cx(x + w / 2), y + h / 2, cz(z + d) + 0.006); }
    else { plane.rotation.y = Math.PI / 2; plane.position.set(cx(x) + 0.006, y + h / 2, cz(z + d / 2)); }
    t.add(plane);
  }

  function sphere(t, m, x, y, z, r) {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), m);
    mesh.position.set(cx(x), y, cz(z));
    mesh.castShadow = true; mesh.receiveShadow = true;
    t.add(mesh); return mesh;
  }
  function plant(t, x, z, y, s) {
    cyl(t, M.pot, x, y, z, 0.11 * s, 0.22 * s, 14);
    sphere(t, M.plant, x, y + 0.38 * s, z, 0.16 * s);
    sphere(t, M.plantLight, x + 0.08 * s, y + 0.5 * s, z + 0.05 * s, 0.12 * s);
    sphere(t, M.plant, x - 0.07 * s, y + 0.48 * s, z - 0.06 * s, 0.1 * s);
  }
  function officeChair(t, x, z, y, dir) {
    cyl(t, M.steelDark, x, y + 0.08, z, 0.02, 0.34);
    [[0.17, 0], [-0.17, 0], [0, 0.17], [0, -0.17]].forEach(o => {
      box(t, M.steelDark, x + o[0] - (o[0] ? Math.abs(o[0]) : 0.015), y + 0.05, z + o[1] - (o[1] ? Math.abs(o[1]) : 0.015), o[0] ? 0.34 / 2 + 0.02 : 0.03, 0.03, o[1] ? 0.34 / 2 + 0.02 : 0.03);
      cyl(t, M.crate, x + o[0], y, z + o[1], 0.03, 0.05, 10);
    });
    box(t, M.fabric, x - 0.23, y + 0.42, z - 0.22, 0.46, 0.07, 0.44);
    box(t, M.fabric, x - 0.22, y + 0.49, z + dir * 0.19 - 0.03, 0.44, 0.48, 0.06);
  }
  // ---------- GROUND FLOOR ----------
  box(ground, M.concrete, 0, -0.06, 0, W, 0.06, D);
  // perimeter walls (ground)
  box(ground, M.tealWall, 0, 0, -0.05, W, H0, 0.05);
  box(ground, M.wallPaint, -0.05, 0, 0, 0.05, H0, D);
  box(ground, M.glass, W, 0.15, 0, 0.05, H0 - 0.3, D);
  for (let i = 0; i <= 4; i++) box(ground, M.alu, W, 0, i * D / 4 - 0.01, 0.014, H0, 0.02);
  box(ground, M.wallPaint, 0, 0, D, W, H0, 0.05);

  // U-keuken
  box(ground, M.cabinet, 0, 0, 0, 0.62, 0.8, 0.6);
  [0.32, 0.5, 0.68, 0.86, 1.04].forEach(y => box(ground, M.oak, 0.02, y, 0.02, 0.58, 0.02, 0.56));
  box(ground, M.cabinet, 0.62, 0, 0, 0.6, 2.1, 0.62);
  box(ground, M.cabinetFront, 0.66, 0.05, 0.63, 0.52, 1.9, 0.02);
  box(ground, M.steel, 0.7, 1.1, 0.65, 0.025, 0.3, 0.02);
  box(ground, M.cabinet, 1.22, 0, 0, 1.58, 0.8, 0.62);
  box(ground, M.counter, 1.2, 0.8, 0, 1.62, 0.05, 0.66);
  box(ground, M.steel, 1.6, 0.83, 0.1, 0.62, 0.02, 0.42);
  box(ground, M.cabinet, 2.8, 0, 0, 0.6, 2.1, 0.62);
  box(ground, M.cabinetFront, 2.84, 0.05, 0.63, 0.52, 1.9, 0.02);
  box(ground, M.steel, 3.24, 1.1, 0.65, 0.025, 0.3, 0.02);
  // inductieplaat met ingebouwde afvoer
  box(ground, M.cabinet, 0, 0, 0.62, 0.62, 0.8, 1.2);
  box(ground, M.counter, 0, 0.8, 0.62, 0.66, 0.05, 1.24);
  box(ground, M.screen, 0.06, 0.852, 0.88, 0.52, 0.012, 0.62);
  [[0.17, 1.06], [0.17, 1.33], [0.45, 1.06], [0.45, 1.33]].forEach(q => cyl(ground, M.steelDark, q[0], 0.858, q[1], 0.075, 0.005, 24));
  box(ground, M.steel, 0.28, 0.858, 0.95, 0.06, 0.007, 0.48);
  box(ground, M.cabinet, 0, 0, 1.85, 2.8, 0.8, 0.62);
  box(ground, M.teal, 0.02, 0.06, 2.455, 2.76, 0.72, 0.02);
  box(ground, M.counter, 0, 0.8, 1.85, 2.84, 0.05, 0.66);
  logoPanel(ground, 1.15, 0.04, 1.5, 0.05, 0.52, 1.55, 'z+');

  // eettafel + krukken
  box(ground, M.oak, 1.9, 0.94, 2.62, 0.9, 0.06, 2.6);
  [[1.97, 2.68], [1.97, 5.1], [2.72, 2.68], [2.72, 5.1]].forEach(q => cyl(ground, M.steelDark, q[0], 0, q[1], 0.03, 0.94));
  for (let i = 0; i < 3; i++) [1.42, 2.92].forEach(cxp => {
    const cz2 = 2.97 + i * 0.85;
    cyl(ground, M.mustard, cxp, 0.62, cz2, 0.19, 0.06);
    cyl(ground, M.steelDark, cxp, 0, cz2, 0.03, 0.62);
  });
  // planten beneden
  plant(ground, 5.62, 7.85, 0, 1.9);
  plant(ground, 2.5, 2.16, 0.85, 0.6);
  plant(ground, 0.22, 4.45, 0, 1.1);

  // open trap
  for (let i = 0; i < 13; i++) {
    const zz = 0.65 + i * 0.246, hh = 0.265 * (13 - i);
    box(ground, M.stairWood, 4.72, hh - 0.05, zz, 1.26, 0.05, 0.246);
    box(ground, M.steelDark, 4.72, hh - 0.265, zz, 1.26, 0.265, 0.03);
  }
  for (let i = 0; i < 8; i++) cyl(ground, M.steelDark, 4.68, 0.9, 0.75 + i * 0.42, 0.015, 0.9);
  box(ground, M.steel, 4.66, 0.86, 0.6, 0.03, 0.05, 3.2);

  // toilet onder de trap
  box(ground, M.wallDark, 4.66, 0, 0.6, 0.05, H0 * 0.62, 0.52);
  box(ground, M.wallDark, 4.66, 0, 1.98, 0.05, H0 * 0.62, 0.24);
  box(ground, M.cabinetFront, 4.63, 0, 1.14, 0.04, 1.98, 0.84);
  box(ground, M.wallDark, 4.71, 0, 2.16, 1.27, H0 * 0.62, 0.05);

  // koeling / vriezer
  [[3.85, 2.10], [3.85, 2.95]].forEach(q => {
    box(ground, M.steel, q[0], 0, q[1], 0.85, 2.0, 0.8);
    box(ground, M.steelDark, q[0] + 0.06, 0.06, q[1] + 0.76, 0.7, 0.16, 0.04);
  });
  // zwarte kratten achter de trap
  for (let c = 0; c < 2; c++) for (let r = 0; r < 3; r++) box(ground, M.crate, 4.76 + c * 0.61, r * 0.62, 0.08, 0.58, 0.58, 0.4);
  // RVS stellingkast: 5 schappen + 4 staanders + witte bakken
  for (let sh = 0; sh < 5; sh++) box(ground, M.steel, 0.02, 0.08 + sh * 0.42, 2.6, 0.45, 0.025, 1.18);
  [[0.03, 2.61], [0.4, 2.61], [0.03, 3.73], [0.4, 3.73]].forEach(q => box(ground, M.steel, q[0], 0, q[1], 0.035, 1.78, 0.035));
  [[2.72, 0.53], [2.72, 1.37], [3.28, 0.11], [3.28, 0.95]].forEach(q => box(ground, M.kallaxFront, 0.06, q[1], q[0], 0.36, 0.26, 0.44));
  // KALLAX met servies
  box(ground, M.kallax, 0, 0, 3.9, 0.39, 1.47, 0.77);
  for (let sh = 1; sh < 4; sh++) box(ground, M.kallaxFront, 0.0, sh * 0.365, 3.9, 0.41, 0.03, 0.77);
  box(ground, M.kallaxFront, 0.0, 0, 4.275, 0.41, 1.47, 0.03);
  // 4 stellingrekken: staanders + schappen + kratten
  for (let r = 0; r < 4; r++) {
    const z0 = 4.75 + r * 0.9;
    for (let sh = 0; sh < 5; sh++) box(ground, M.rackShelf, 0.02, 0.06 + sh * 0.43, z0, 0.45, 0.028, 0.88);
    [[0.03, z0 + 0.01], [0.4, z0 + 0.01], [0.03, z0 + 0.83], [0.4, z0 + 0.83]].forEach(q => box(ground, M.rack, q[0], 0, q[1], 0.035, 1.8, 0.035));
  }
  [[4.86, 0.09], [4.86, 0.95], [5.78, 0.52], [5.78, 1.38], [6.68, 0.09], [6.68, 0.95], [7.58, 0.52], [7.58, 1.38]]
    .forEach(q => box(ground, M.crate, 0.05, q[1], q[0], 0.38, 0.31, 0.62));
  // meterkast
  box(ground, M.wallDark, 5.62, 0, 4.6, 0.38, 2.0, 0.9);
  // spotrails
  [1.05, 2.55, 4.05].forEach(rx => {
    box(ground, M.steelDark, rx, H0 - 0.14, 0.6, 0.04, 0.04, 7.2);
    for (let i = 0; i < 7; i++) cyl(ground, M.steelDark, rx, H0 - 0.3, 0.95 + i * 1.05, 0.045, 0.14);
  });
  // overheaddeur met ribbels + loopdeur
  box(ground, M.wallDark, 0.4, 0, D - 0.05, 3.0, H0 * 0.85, 0.05);
  for (let i = 0; i < 8; i++) box(ground, M.steelDark, 0.42, 0.28 + i * 0.33, D - 0.06, 2.96, 0.03, 0.012);
  box(ground, M.wallDark, 3.7, 0, D - 0.05, 0.9, H0 * 0.7, 0.05);
  box(ground, M.steel, 3.78, 0.95, D - 0.08, 0.02, 0.3, 0.02);

  // ---------- SLAB / UPPER FLOOR ----------
  box(slab, M.ceiling, 0, H0, 0, 4.7, SLAB, D);
  box(slab, M.ceiling, 4.7, H0, 0, 1.3, SLAB, 0.6);
  box(slab, M.ceiling, 4.7, H0, 3.8, 1.3, SLAB, 4.7);
  box(upper, M.woodFloor, 0, Y1 - 0.01, 0, 4.7, 0.022, D);
  box(upper, M.woodFloor, 4.7, Y1 - 0.01, 0, 1.3, 0.022, 0.6);
  box(upper, M.woodFloor, 4.7, Y1 - 0.01, 3.8, 1.3, 0.022, 4.7);
  box(upper, M.steel, 4.64, Y1, 0.6, 0.05, 0.9, 3.2);
  for (let i = 0; i < 8; i++) cyl(upper, M.steel, 4.66, Y1 + 0.45, 0.72 + i * 0.42, 0.015, 0.9);

  // upper walls (dark side to the right, glass at front, wall paint back/left)
  box(upper, M.wallPaint, 0, Y1, -0.05, W, H1, 0.05);
  box(upper, M.wallPaint, -0.05, Y1, 0, 0.05, H1, D);
  box(upper, M.glass, W, Y1 + 0.1, 0, 0.05, H1 - 0.2, D);
  for (let i = 0; i <= 4; i++) box(upper, M.alu, W, Y1, i * D / 4 - 0.01, 0.014, H1, 0.02);
  box(upper, M.glass, 0.2, Y1, D, W - 0.4, H1 * 0.72, 0.05);

  // kantoor (glazen kamer)
  box(upper, M.wallDark, 0, Y1, 0, 3.0, H1, 0.06);
  box(upper, M.glass, 2.94, Y1, 0, 0.06, H1, 2.8);
  box(upper, M.glass, 0, Y1, 2.74, 3.0, H1, 0.06);
  // glazen schuifdeur kantoor: paneel + bovenrail + greep
  box(upper, M.alu, 1.78, Y1 + 2.24, 2.63, 0.98, 0.05, 0.05);
  box(upper, M.glass, 1.85, Y1 + 0.02, 2.655, 0.85, 2.22, 0.025);
  box(upper, M.steelDark, 2.6, Y1 + 0.85, 2.645, 0.02, 0.4, 0.045);
  function slatWall(x, z, w, d, h, ox, oz) {
    box(upper, M.slatBack, x, Y1, z, w, h, d);
    const pitch = 0.1, sw = 0.06, t = 0.02;
    if (w >= d) for (let u = 0.03; u + sw < w; u += pitch) box(upper, M.slat, x + u, Y1 + 0.03, z + (oz > 0 ? d : -t), sw, h - 0.06, t);
    else for (let u = 0.03; u + sw < d; u += pitch) box(upper, M.slat, x + (ox > 0 ? w : -t), Y1 + 0.03, z + u, t, h - 0.06, sw);
  }
  slatWall(0.06, 0.06, 2.82, 0.06, H1 - 0.1, 0, 1);
  slatWall(0.02, 0.14, 0.06, 2.56, H1 - 0.1, 1, 0);
  slatWall(3.1, 0, 2.9, 0.06, H1 - 0.1, 0, 1);
  slatWall(5.94, 0.6, 0.06, 3.2, H1 - 0.1, -1, 0);
  // drie losse logotegels, netjes gecentreerd onder elkaar
  const decal = (url, yC, w, h) => {
    box(upper, M.whiteboard, 4.18, Y1 + yC - 0.26, 0.07, 1.04, 0.52, 0.035);
    const tex = new THREE.TextureLoader().load(url);
    tex.colorSpace = THREE.SRGBColorSpace;
    const pm = new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.6, metalness: 0 });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), pm);
    plane.position.set(cx(4.7), Y1 + yC, cz(0.105) + 0.006);
    plane.castShadow = false;
    upper.add(plane);
  };
  decal('/intern/kantoor-b31/uploads/CQ%20Logo%20RGB.png', 1.98, 0.86, 0.25);
  decal('/intern/kantoor-b31/uploads/Logo%20Black%20PNG.png', 1.36, 0.86, 0.13);
  decal('/intern/kantoor-b31/uploads/1.png', 0.74, 0.42, 0.42);
  // prik- en schrijfwand: kurk + whiteboard met alu rand
  box(upper, M.cork, 0.02, Y1 + 0.95, 3.6, 0.03, 1.1, 1.9);
  box(upper, M.whiteboard, 0.02, Y1 + 0.95, 5.6, 0.03, 1.1, 2.0);
  box(upper, M.alu, 0.045, Y1 + 0.93, 5.58, 0.012, 0.02, 2.04);
  box(upper, M.alu, 0.045, Y1 + 2.06, 5.58, 0.012, 0.02, 2.04);

  // 6 werkplekken bench
  box(upper, M.deskTop, 0.9, Y1 + 0.7, 4.8, 3.6, 0.04, 1.6);
  [[0.96, 4.86], [0.96, 6.28], [4.38, 4.86], [4.38, 6.28]].forEach(q => cyl(upper, M.steelDark, q[0], Y1, q[1], 0.03, 0.7));
  for (let i = 0; i < 3; i++) {
    box(upper, M.screen, 1.05 + i * 1.2, Y1 + 0.78, 5.46, 0.5, 0.34, 0.03);
    box(upper, M.screen, 1.05 + i * 1.2, Y1 + 0.78, 5.68, 0.5, 0.34, 0.03);
    officeChair(upper, 1.33 + i * 1.2, 4.42, Y1, -1);
    officeChair(upper, 1.33 + i * 1.2, 6.78, Y1, 1);
  }
  // hoekbureau iets naar achteren, met bezoekersstoel aan de andere kant
  box(upper, M.oak, 0.3, Y1 + 0.7, 1.15, 1.98, 0.05, 0.7);
  box(upper, M.oak, 0.3, Y1 + 0.7, 0.55, 0.66, 0.05, 0.6);
  [[0.36, 1.21], [0.36, 1.78], [2.21, 1.21], [2.21, 1.78]].forEach(q => cyl(upper, M.steelDark, q[0], Y1, q[1], 0.03, 0.7));
  box(upper, M.screen, 1.03, Y1 + 0.8, 1.56, 0.5, 0.34, 0.03);
  officeChair(upper, 1.29, 0.78, Y1, -1);
  // planten in het kantoor
  plant(upper, 2.55, 2.3, Y1, 1.7);
  plant(upper, 0.5, 0.72, Y1 + 0.75, 0.55);
  plant(upper, 2.44, 0.35, Y1 + 1.47, 0.75);
  // IKEA KALLAX 4x4 naast de koffiehoek
  const kx = 5.59, kz = 3.95, kk = 1.47;
  for (let i = 0; i <= 4; i++) {
    box(upper, M.kallaxFront, kx, Y1 + i * (kk - 0.033) / 4, kz, 0.39, 0.033, kk);
    box(upper, M.kallaxFront, kx, Y1, kz + i * (kk - 0.033) / 4, 0.39, kk, 0.033);
  }
  [[0.08, 0.42], [1.1, 0.06], [0.75, 0.78]].forEach(q => box(upper, M.crate, kx + 0.05, Y1 + q[1] + 0.04, kz + q[0] + 0.04, 0.3, 0.26, 0.28));
  // koffieblok: wit met zwart blad + Nespresso-apparaat
  box(upper, M.doorFront, 5.35, Y1 + 0.06, 6.2, 0.65, 0.78, 1.8);
  box(upper, M.counter, 5.33, Y1 + 0.84, 6.2, 0.69, 0.04, 1.8);
  box(upper, M.screen, 5.48, Y1 + 0.88, 7.05, 0.2, 0.28, 0.34);
  box(upper, M.steel, 5.5, Y1 + 1.16, 7.13, 0.16, 0.05, 0.18);
  box(upper, M.steel, 5.5, Y1 + 0.885, 7.09, 0.16, 0.01, 0.14);
  box(upper, M.glass, 5.52, Y1 + 0.9, 7.36, 0.12, 0.22, 0.06);
  // KALLAX admin + boeken
  box(upper, M.kallax, 2.05, Y1, 0.15, 0.77, 1.47, 0.39);
  for (let sh = 1; sh < 4; sh++) box(upper, M.kallaxFront, 2.05, Y1 + sh * 0.365, 0.14, 0.77, 0.03, 0.41);
  [1.16, 1.52].forEach((yy, idx) => {
    box(upper, M.oak, 0.13, Y1 + yy, 0.55, 0.26, 0.035, 0.94);
    for (let i = 0; i < 9; i++) box(upper, idx ? M.book2 : M.book1, 0.16 + i * 0.025, Y1 + yy + 0.035, 0.6 + (i % 3) * 0.02, 0.02, 0.22, 0.2);
  });
  // airco
  box(upper, M.kallaxFront, 4.1, Y1 + H1 - 0.32, 0.06, 0.9, 0.26, 0.3);
  // ramen voorgevel (extra glazing detail)
  for (let i = 0; i < 3; i++) box(upper, M.glass, 0.35 + i * 1.35, Y1 + 0.85, D - 0.1, 1.1, H1 * 0.5, 0.06);

  ground.traverse(o => { if (o.isMesh) o.userData.floor = 'ground'; });
  upper.traverse(o => { if (o.isMesh) o.userData.floor = 'upper'; });

  return { group, ground, upper, slab, W, D, H0, H1, SLAB, Y1 };
}

export const PRESETS = {
  vogelvlucht: { pos: [6.2, 10.5, 8.8], target: [0.4, 2.4, -0.3] },
  deur: { pos: [1.6, 1.65, 3.6], target: [-1.4, 1.2, -2.8] },
  studio: { pos: [1.4, 1.35, -0.6], target: [-1.4, 1.0, -3.4] },
};
