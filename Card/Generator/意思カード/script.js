/**
 * CardBuilderApplication
 * Handles data binding, image preview generation, and file exports.
 */
class CardBuilderApplication {
  constructor() {
    this.dom = {
      form: {
        image: document.getElementById('cardImage'),
        // 新しい入力項目
        imgScale: document.getElementById('imgScale'),
        imgX: document.getElementById('imgX'),
        imgY: document.getElementById('imgY'),
        
        weight: document.getElementById('memoryWeight'),
        atonement: document.getElementById('atonementCost'),
        name: document.getElementById('cardName'),
        desc: document.getElementById('cardDesc'),
        flavor: document.getElementById('flavorText'),
        aux: document.getElementById('auxText'),
        tag1: document.getElementById('tagInput1'),
        tag2: document.getElementById('tagInput2'),
        tag3: document.getElementById('tagInput3'),
      },
      preview: {
        // コンテナと画像タグを区別
        imageContainer: document.getElementById('previewImageContainer'),
        imageTag: document.getElementById('previewImageTag'),
        
        weight: document.getElementById('previewWeight'),
        atonement: document.getElementById('previewAtonement'),
        name: document.getElementById('previewName'),
        desc: document.getElementById('previewDesc'),
        flavor: document.getElementById('previewFlavor'),
        aux: document.getElementById('previewAux'),
        card: document.getElementById('memoryCard'),
        tag1: document.getElementById('previewTag1'),
        tag2: document.getElementById('previewTag2'),
        tag3: document.getElementById('previewTag3'),
      },
      buttons: {
        png: document.getElementById('btnDownloadImg'),
        xml: document.getElementById('btnDownloadXml'),
      }
    };

    this.xmlTemplate = `<?xml version="1.0" encoding="UTF-8"?><mxfile host="app.diagrams.net"><diagram id="m2u0MWGMpfwk5fW7XE3V" name="ページ2"><mxGraphModel dx="2866" dy="1743" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1400" math="0" shadow="0"><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="FP8hBfjytboR9a7PyeOW-1" value="カードアイコン・画像" style="text;html=1;whiteSpace=wrap;strokeColor=default;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=16;dashed=1;" parent="1" vertex="1"><mxGeometry x="60" y="260" width="740" height="540" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-1" value="" style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;fontSize=12;curved=1;endArrow=none;endFill=0;" parent="1" edge="1"><mxGeometry width="140" relative="1" as="geometry"><mxPoint y="1360" as="sourcePoint" /><mxPoint x="850" y="1180" as="targetPoint" /><Array as="points"><mxPoint x="230" y="1320" /><mxPoint x="470" y="1320" /><mxPoint x="600" y="1300" /><mxPoint x="730" y="1170" /></Array></mxGeometry></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-3" value="記憶カード" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=32;" parent="1" vertex="1"><mxGeometry x="235" y="1335" width="380" height="40" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-4" value="記憶の重み" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=25;" parent="1" vertex="1"><mxGeometry x="320" y="30" width="210" height="30" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-6" value="5" style="text;whiteSpace=wrap;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=200;fontFamily=BIZ UDPMincho;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DBIZ%2BUDPMincho;fontStyle=1" parent="1" vertex="1"><mxGeometry x="310" y="50" width="230" height="200" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-7" value="3" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=100;fontFamily=BIZ UDPMincho;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DBIZ%2BUDPMincho;fontStyle=1" parent="1" vertex="1"><mxGeometry x="700" y="1210" width="130" height="130" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-8" value="償い必要数" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=22;fontFamily=Helvetica;" parent="1" vertex="1"><mxGeometry x="690" y="1340" width="150" height="30" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-10" value="" style="text;html=1;whiteSpace=wrap;strokeColor=default;fillColor=none;align=left;verticalAlign=top;rounded=0;fontSize=32;dashed=1;fontFamily=BIZ UDPGothic;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DBIZ%2BUDPGothic;" parent="1" vertex="1"><mxGeometry x="40" y="850" width="760" height="320" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-12" value="" style="text;whiteSpace=wrap;strokeColor=default;fillColor=none;align=left;verticalAlign=middle;rounded=0;fontSize=38;fontStyle=1;dashed=1;fontFamily=BIZ UDPGothic;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DBIZ%2BUDPGothic;" parent="1" vertex="1"><mxGeometry x="40" y="800" width="760" height="50" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-15" value="タグに対応する&lt;div&gt;アイコン&lt;/div&gt;" style="ellipse;whiteSpace=wrap;html=1;" parent="1" vertex="1"><mxGeometry x="40" y="40" width="90" height="90" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-16" value="タグに対応する&lt;div&gt;アイコン&lt;/div&gt;" style="ellipse;whiteSpace=wrap;html=1;" parent="1" vertex="1"><mxGeometry x="150" y="40" width="90" height="90" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-17" value="タグに対応する&lt;div&gt;アイコン&lt;/div&gt;" style="ellipse;whiteSpace=wrap;html=1;" parent="1" vertex="1"><mxGeometry x="40" y="150" width="90" height="90" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-21" value="" style="whiteSpace=wrap;html=1;rotation=-90;fontFamily=Klee One;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DKlee%2BOne;fillColor=none;strokeColor=default;align=right;dashed=1;" parent="1" vertex="1"><mxGeometry x="419.25" y="389.25" width="772.5" height="51" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-18" value="" style="html=1;align=left;verticalAlign=top;fontSize=19;strokeColor=default;fillColor=none;dashed=1;fontFamily=BIZ UDPGothic;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DBIZ%2BUDPGothic;" parent="1" vertex="1"><mxGeometry x="40" y="1180" width="560" height="100" as="geometry" /></mxCell></root></mxGraphModel></diagram></mxfile>`;
    this.init();
  }

  init() {
    this.addEventListeners();
    this.updatePreview(); // Initial render
  }

  addEventListeners() {
    // Text Inputs & Image Adjustments
    const inputs = [
        'weight', 'atonement', 'name', 'desc', 'flavor', 'aux', 
        'tag1', 'tag2', 'tag3',
        'imgScale', 'imgX', 'imgY' // 追加
    ];
    inputs.forEach(key => {
      this.dom.form[key].addEventListener('input', () => this.updatePreview());
    });

    // Image Upload
    this.dom.form.image.addEventListener('change', (e) => this.handleImageUpload(e));

    // Buttons
    this.dom.buttons.png.addEventListener('click', () => this.downloadImage());
    this.dom.buttons.xml.addEventListener('click', () => this.downloadXml());
  }

  /**
   * テキストを解析し、$icon{name} を画像タグに変換する
   */
  parseRichText(text) {
    if (!text) return '';

    let escaped = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/\n/g, '<br>');

    const seenTags = new Set();

    escaped = escaped.replace(/\$icon\{([^}]+)\}/g, (match, tagName) => {
      const imgTag = `<img src="Resources/Icon/${tagName}.png" class="inline-icon" alt="${tagName}" />`;
      if (!seenTags.has(tagName)) {
        seenTags.add(tagName);
        return `${imgTag}<span class="icon-annotation">(${tagName})</span>`;
      } else {
        return imgTag;
      }
    });

    return escaped
      .replace(/「/g, '｢').replace(/」/g, '｣')
      .replace(/、/g, '､').replace(/。/g, '｡')
      .replace(/（/g, '(').replace(/）/g, ') ')
      .replace(/^#/, '■ ');
  }

  updateTagIcon(imgElement, tagName) {
    if (!tagName) {
      imgElement.style.display = 'none';
      imgElement.src = '';
    } else {
      imgElement.style.display = 'block';
      imgElement.src = `Resources/Icon/${tagName}.png`;
    }
  }

  updatePreview() {
    const { form, preview } = this.dom;

    // テキスト反映
    preview.weight.textContent = form.weight.value;
    preview.atonement.textContent = form.atonement.value;
    preview.name.textContent = form.name.value;
    preview.desc.innerHTML = this.parseRichText(form.desc.value);
    preview.flavor.innerText = form.flavor.value;
    preview.aux.innerHTML = this.parseRichText(form.aux.value);

    // タグアイコン反映
    this.updateTagIcon(preview.tag1, form.tag1.value);
    this.updateTagIcon(preview.tag2, form.tag2.value);
    this.updateTagIcon(preview.tag3, form.tag3.value);

    // ★変更: 画像の位置とスケール調整
    // 画像がロードされている場合のみ処理
    if (preview.imageTag.src && preview.imageTag.style.display !== 'none') {
        const scale = form.imgScale.value;
        const x = form.imgX.value;
        const y = form.imgY.value;
        
        // CSS Transformで移動と拡大を適用
        // 順序重要: translate(ズレ) -> scale(倍率)
        preview.imageTag.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    }
  }

  handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // ★変更: imgタグのsrcに設定し、コンテナのスタイルを更新
        const imgTag = this.dom.preview.imageTag;
        const container = this.dom.preview.imageContainer;

        imgTag.src = e.target.result;
        imgTag.style.display = 'block';
        
        // 画像ロード時にサイズ合わせを行う（object-fit: cover 相当の計算を初期値として適用するため）
        imgTag.onload = () => {
            // コンテナサイズ
            const cw = 740;
            const ch = 540;
            // 画像サイズ
            const iw = imgTag.naturalWidth;
            const ih = imgTag.naturalHeight;

            // Cover比率計算
            const scale = Math.max(cw / iw, ch / ih);
            
            // imgタグ自体のサイズを、コンテナを埋める最小サイズ（Baseサイズ）にする
            // ここからさらにユーザー設定のscaleがかかる
            imgTag.style.width = `${iw * scale}px`;
            imgTag.style.height = `${ih * scale}px`;

            // 入力値をリセットするかどうかはお好みで。今回はリセットせず維持する設計にします
            this.updatePreview(); 
        };

        // 背景白（透過PNG対策）
        container.style.backgroundColor = 'white';
        container.style.border = 'none';
      };
      reader.readAsDataURL(file);
    }
  }

  async downloadImage() {
    const renderer = new CanvasRenderer(this.dom.form);
    try {
      const canvas = await renderer.render();
      const link = document.createElement('a');
      link.download = `${this.dom.form.name.value || 'memory-card'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Image generation failed:', error);
      alert('画像の生成に失敗しました。');
    }
  }

  downloadXml() {
     // XMLダウンロード機能（既存のまま）
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this.xmlTemplate, "text/xml");
    const updateVal = (id, value) => {
      const cell = xmlDoc.querySelector(`mxCell[id="${id}"]`);
      if (cell) {
        const safeValue = value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\n/g, "&#xa;");
        cell.setAttribute('value', safeValue);
      }
    };
    updateVal('rHbPwuJmVqwy9-EArj8U-6', this.dom.form.weight.value);
    updateVal('rHbPwuJmVqwy9-EArj8U-7', this.dom.form.atonement.value);
    updateVal('rHbPwuJmVqwy9-EArj8U-12', this.dom.form.name.value);
    updateVal('rHbPwuJmVqwy9-EArj8U-10', this.dom.form.desc.value);
    updateVal('rHbPwuJmVqwy9-EArj8U-21', this.dom.form.flavor.value);
    updateVal('rHbPwuJmVqwy9-EArj8U-18', this.dom.form.aux.value);

    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(xmlDoc);
    const blob = new Blob([xmlString], { type: 'application/xml' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${this.dom.form.name.value || 'memory-card'}.drawio.xml`;
    link.click();
    URL.revokeObjectURL(link.href);
  }
}

/**
 * CanvasRenderer
 */
class CanvasRenderer {
  constructor(formData) {
    this.data = {
      imageFile: formData.image.files[0],
      // 画像調整パラメータ
      imgScale: parseFloat(formData.imgScale.value) || 1.0,
      imgX: parseFloat(formData.imgX.value) || 0,
      imgY: parseFloat(formData.imgY.value) || 0,

      weight: formData.weight.value,
      atonement: formData.atonement.value,
      name: formData.name.value,
      desc: formData.desc.value,
      flavor: formData.flavor.value,
      aux: formData.aux.value,
      tags: [formData.tag1.value, formData.tag2.value, formData.tag3.value],
    };

    this.width = 850;
    this.height = 1400;
    this.fonts = {
      mincho: '700 200px "BIZ UDPMincho", serif',
      minchoSmall: '700 100px "BIZ UDPMincho", serif',
      gothicTitle: '700 38px "BIZ UDPGothic", sans-serif',
      gothicBody: '400 32px "BIZ UDPGothic", sans-serif',
      gothicSmall: '400 19px "BIZ UDPGothic", sans-serif',
      hand: '400 24px "Klee One", cursive',
      ui: '400 22px Helvetica, sans-serif',
      uiLarge: '400 32px "BIZ UDPGothic", sans-serif',
      label: '400 25px "BIZ UDPGothic", sans-serif'
    };
  }

  async render() {
    await document.fonts.ready;

    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext('2d');

    // Background (White base)
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, this.width, this.height);

    // 1. User Image
    await this._drawUserImage(ctx);

    // 2. SVG Curve
    this._drawCurve(ctx);

    // 3. Tag Icons
    await this._drawTagIcons(ctx);

    // 4. Texts
    this._drawTexts(ctx);

    // 5. Frame
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, this.width, this.height);

    return canvas;
  }

  async _drawUserImage(ctx) {
    if (!this.data.imageFile) {
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(60, 260, 740, 540);
      return;
    }
    try {
      const img = await this._loadImage(URL.createObjectURL(this.data.imageFile));
      
      // 描画エリア
      const targetX = 60;
      const targetY = 260;
      const targetW = 740;
      const targetH = 540;

      // 中心座標
      const centerX = targetX + targetW / 2;
      const centerY = targetY + targetH / 2;

      // 基本スケール（Cover相当）
      const baseScale = Math.max(targetW / img.width, targetH / img.height);
      
      // 描画する基本サイズ（ここからさらにユーザー倍率がかかる）
      const drawW = img.width * baseScale;
      const drawH = img.height * baseScale;

      ctx.save();
      
      // クリッピング領域の設定
      ctx.beginPath();
      ctx.rect(targetX, targetY, targetW, targetH);
      ctx.clip();

      // 座標変換
      // 1. エリアの中心へ移動
      // 2. ユーザー指定のズレ（X, Y）を適用
      ctx.translate(centerX + this.data.imgX, centerY + this.data.imgY);
      
      // 3. ユーザー指定の拡大縮小
      ctx.scale(this.data.imgScale, this.data.imgScale);

      // 4. 画像の中心を描画基準点に合わせるため、width/2, height/2 戻して描画
      ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);

      ctx.restore();

    } catch (e) {
      console.warn('Failed to load user image', e);
    }
  }

  _drawCurve(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, 1360);
    ctx.bezierCurveTo(230, 1320, 470, 1320, 550, 1300);
    ctx.bezierCurveTo(630, 1280, 730, 1170, 850, 1180);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  async _drawTagIcons(ctx) {
    const positions = [{x: 40, y: 40}, {x: 150, y: 40}, {x: 40, y: 150}];
    for (let i = 0; i < 3; i++) {
      const tag = this.data.tags[i];
      if (!tag) continue;
      try {
        const img = await this._loadImage(`Resources/Icon/${tag}.png`);
        const {x, y} = positions[i];
        const size = 90;
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.clip();
        const padding = 5;
        const availSize = size - padding * 2;
        const scale = Math.min(availSize / img.width, availSize / img.height);
        const drawW = img.width * scale;
        const drawH = img.height * scale;
        const drawX = x + padding + (availSize - drawW) / 2;
        const drawY = y + padding + (availSize - drawH) / 2;
        ctx.drawImage(img, drawX, drawY, drawW, drawH);
        ctx.restore();
      } catch (e) {}
    }
  }

  _drawTexts(ctx) {
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Weight
    ctx.font = this.fonts.label;
    ctx.fillText('記憶の重み', 320 + 210 / 2, 30 + 30 / 2);
    ctx.font = this.fonts.mincho;
    ctx.fillText(this.data.weight, 310 + 230 / 2, 50 + 200 / 2);

    // Atonement
    ctx.font = this.fonts.minchoSmall;
    ctx.fillText(this.data.atonement, 700 + 130 / 2, 1210 + 130 / 2);
    ctx.font = this.fonts.ui;
    ctx.fillText('償い必要数', 690 + 150 / 2, 1340 + 30 / 2);

    // Card Type
    ctx.font = this.fonts.uiLarge;
    ctx.fillText('記憶 / 意思', 235 + 380 / 2, 1335 + 40 / 2);

    // Name
    ctx.textAlign = 'left';
    ctx.font = this.fonts.gothicTitle;
    ctx.fillText(this.data.name, 40, 800 + 50 / 2);
    ctx.beginPath();
    ctx.moveTo(40, 850);
    ctx.lineTo(40 + 760, 850);
    ctx.lineWidth = 2;
    ctx.stroke();

    // Desc
    this._drawDescription(ctx);

    // Aux
    ctx.font = this.fonts.gothicSmall;
    this._wrapText(ctx, this._sanitizeText(this.data.aux), 40, 1180, 560, 26);

    // Flavor
    this._drawVerticalText(ctx, this.data.flavor, 850 - 30 - 30, 40);
  }

  _drawDescription(ctx) {
    const text = this.data.desc.replace(/\$icon\{[^}]+\}/g, '').replace(/^#/, '■ ');
    ctx.font = this.fonts.gothicBody;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    this._wrapText(ctx, text, 40, 860, 760, 42);
  }

  _wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const lines = text.split(/\n/);
    for (let i = 0; i < lines.length; i++) {
      let line = '';
      const words = lines[i].split('');
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line, x, y);
          line = words[n];
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, y);
      y += lineHeight;
    }
  }

  _drawVerticalText(ctx, text, x, y) {
    if (!text) return;
    ctx.font = this.fonts.hand;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const fontSize = 24;
    const lineHeight = fontSize * 1.5;
    const lines = text.split('\n');
    lines.forEach((line, colIndex) => {
      const currentX = x - (colIndex * lineHeight);
      let currentY = y;
      for (let i = 0; i < line.length; i++) {
        ctx.fillText(line[i], currentX, currentY);
        currentY += fontSize * 1.1;
      }
    });
  }

  _sanitizeText(text) {
    return text ? text.replace(/\$icon\{[^}]+\}/g, '') : '';
  }

  _loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CardBuilderApplication();
});