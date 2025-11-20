/**
 * CardBuilderApplication
 * Handles data binding, image preview generation, and file exports.
 */
class CardBuilderApplication {
    constructor() {
        this.dom = {
            form: {
                image: document.getElementById('cardImage'),
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
                imageLayer: document.getElementById('previewImage'),
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

        // Template XML content (Minified for JS variable)
        this.xmlTemplate = `<?xml version="1.0" encoding="UTF-8"?><mxfile host="app.diagrams.net"><diagram id="m2u0MWGMpfwk5fW7XE3V" name="ページ2"><mxGraphModel dx="2866" dy="1743" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1400" math="0" shadow="0"><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="FP8hBfjytboR9a7PyeOW-1" value="カードアイコン・画像" style="text;html=1;whiteSpace=wrap;strokeColor=default;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=16;dashed=1;" parent="1" vertex="1"><mxGeometry x="40" y="260" width="740" height="540" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-1" value="" style="edgeStyle=none;orthogonalLoop=1;jettySize=auto;html=1;rounded=0;fontSize=12;curved=1;endArrow=none;endFill=0;" parent="1" edge="1"><mxGeometry width="140" relative="1" as="geometry"><mxPoint y="1360" as="sourcePoint" /><mxPoint x="850" y="1180" as="targetPoint" /><Array as="points"><mxPoint x="230" y="1320" /><mxPoint x="470" y="1320" /><mxPoint x="600" y="1300" /><mxPoint x="730" y="1170" /></Array></mxGeometry></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-3" value="記憶カード" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=32;" parent="1" vertex="1"><mxGeometry x="235" y="1335" width="380" height="40" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-4" value="記憶の重み" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=25;" parent="1" vertex="1"><mxGeometry x="320" y="30" width="210" height="30" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-6" value="5" style="text;whiteSpace=wrap;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=200;fontFamily=BIZ UDPMincho;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DBIZ%2BUDPMincho;fontStyle=1" parent="1" vertex="1"><mxGeometry x="310" y="50" width="230" height="200" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-7" value="3" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=100;fontFamily=BIZ UDPMincho;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DBIZ%2BUDPMincho;fontStyle=1" parent="1" vertex="1"><mxGeometry x="700" y="1210" width="130" height="130" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-8" value="償い必要数" style="text;html=1;whiteSpace=wrap;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;rounded=0;fontSize=22;fontFamily=Helvetica;" parent="1" vertex="1"><mxGeometry x="690" y="1340" width="150" height="30" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-10" value="" style="text;html=1;whiteSpace=wrap;strokeColor=default;fillColor=none;align=left;verticalAlign=top;rounded=0;fontSize=32;dashed=1;fontFamily=BIZ UDPGothic;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DBIZ%2BUDPGothic;" parent="1" vertex="1"><mxGeometry x="40" y="850" width="760" height="320" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-12" value="" style="text;whiteSpace=wrap;strokeColor=default;fillColor=none;align=left;verticalAlign=middle;rounded=0;fontSize=38;fontStyle=1;dashed=1;fontFamily=BIZ UDPGothic;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DBIZ%2BUDPGothic;" parent="1" vertex="1"><mxGeometry x="40" y="800" width="760" height="50" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-15" value="タグに対応する&lt;div&gt;アイコン&lt;/div&gt;" style="ellipse;whiteSpace=wrap;html=1;" parent="1" vertex="1"><mxGeometry x="40" y="40" width="90" height="90" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-16" value="タグに対応する&lt;div&gt;アイコン&lt;/div&gt;" style="ellipse;whiteSpace=wrap;html=1;" parent="1" vertex="1"><mxGeometry x="150" y="40" width="90" height="90" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-17" value="タグに対応する&lt;div&gt;アイコン&lt;/div&gt;" style="ellipse;whiteSpace=wrap;html=1;" parent="1" vertex="1"><mxGeometry x="40" y="150" width="90" height="90" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-21" value="" style="whiteSpace=wrap;html=1;rotation=-90;fontFamily=Klee One;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DKlee%2BOne;fillColor=none;strokeColor=default;align=right;dashed=1;" parent="1" vertex="1"><mxGeometry x="419.25" y="389.25" width="772.5" height="51" as="geometry" /></mxCell><mxCell id="rHbPwuJmVqwy9-EArj8U-18" value="" style="html=1;align=left;verticalAlign=top;fontSize=19;strokeColor=default;fillColor=none;dashed=1;fontFamily=BIZ UDPGothic;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DBIZ%2BUDPGothic;" parent="1" vertex="1"><mxGeometry x="40" y="1180" width="560" height="100" as="geometry" /></mxCell></root></mxGraphModel></diagram></mxfile>`;

        this.init();
    }

    init() {
        this.addEventListeners();
        this.updatePreview(); // Initial render
    }

    addEventListeners() {
        // Text Inputs
        const textInputs = ['weight', 'atonement', 'name', 'desc', 'flavor', 'aux', 'tag1', 'tag2', 'tag3'];
        textInputs.forEach(key => {
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
     * 同時にHTMLエスケープを行い、XSSを防ぐ
     */
    parseRichText(text) {
        if (!text) return '';

        // 1. 基本的なHTMLエスケープ（ユーザー入力のタグを無効化）
        let escaped = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

        // 2. 改行コードを <br> に変換
        escaped = escaped.replace(/\n/g, '<br>');

        // 出現したタグを記録するためのSet
        const seenTags = new Set();

        // 3. $icon{タグ名} を置換
       escaped = escaped.replace(/\$icon\{([^}]+)\}/g, (match, tagName) => {
            // 画像タグの生成
            const imgTag = `<img src="Resources/Icon/${tagName}.png" class="inline-icon" alt="${tagName}" />`;

            if (!seenTags.has(tagName)) {
                // 初出の場合：セットに記録し、「アイコン(タグ名)」の形式で返す
                seenTags.add(tagName);
                // デザイン調整用にspanで囲む（文字サイズを少し小さくするなどCSSで調整可能にするため）
                return `${imgTag}<span class="icon-annotation">(${tagName})</span>`;
            } else {
                // 2回目以降の場合：「アイコン」のみ返す
                return imgTag;
            }
        });
        escaped = escaped.replace(/「/g, '｢')
        .replace(/」/g, '｣')
        .replace(/、/g,'､')
        .replace(/。/g,'｡')
        .replace(/（/g,'(')
        .replace(/）/g,') ')
        .replace(/^#/, '■ ');
        return escaped;
    }

    /**
     * タグアイコン（左上の丸いアイコン）の更新処理ヘルパー
     */
    updateTagIcon(imgElement, tagName) {
        if (!tagName) {
            imgElement.style.display = 'none';
            imgElement.src = '';
        } else {
            imgElement.style.display = 'block';
            imgElement.src = `Resources/Icon/${tagName}.png`;
            // ※読み込みエラー時の非表示処理はHTML側の onerror 属性で処理しています
        }
    }

    updatePreview() {
        const { form, preview } = this.dom;
        
        // 既存の単純なテキスト更新
        preview.weight.textContent = form.weight.value;
        preview.atonement.textContent = form.atonement.value;
        preview.name.textContent = form.name.value;
        
        // ★変更: リッチテキスト（アイコン置換）対応
        preview.desc.innerHTML = this.parseRichText(form.desc.value);
        // 補助テキストやフレーバーテキストでもアイコンを使いたい場合は同様に parseRichText を使用
        // 今回は要望のあった「効果テキスト(desc)」に適用
        
        preview.flavor.innerText = form.flavor.value; // フレーバーは縦書きなので画像が入ると崩れやすいためテキストのまま推奨
        preview.aux.innerHTML = this.parseRichText(form.aux.value); // 補助テキストもアイコン対応しておくと便利

        // ★変更: タグアイコンの更新
        this.updateTagIcon(preview.tag1, form.tag1.value);
        this.updateTagIcon(preview.tag2, form.tag2.value);
        this.updateTagIcon(preview.tag3, form.tag3.value);
    }

    /**
     * Handles file input change to display image in preview.
     */
    handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.dom.preview.imageLayer.style.backgroundImage = `url(${e.target.result})`;
                this.dom.preview.imageLayer.style.border = 'none'; // Remove guide border
            };
            reader.readAsDataURL(file);
        }
    }

    /**
     * Uses html2canvas to render the card DIV as a PNG.
     */
    downloadImage() {
        const cardElement = this.dom.preview.card;
        
        // Scale option ensures high quality even if preview is scaled down via CSS
        html2canvas(cardElement, {
            scale: 1, // 1:1 export of the 850x1400 div
            useCORS: true,
            backgroundColor: null // Transparent if needed, but we have white bg
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `${this.dom.form.name.value || 'memory-card'}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }

    /**
     * Parses the XML template, injects current values, and triggers download.
     */
    downloadXml() {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(this.xmlTemplate, "text/xml");
        
        // Helper to update value by ID
        const updateVal = (id, value) => {
            // Draw.io XML structure often puts text in the 'value' attribute
            // or creates a complex label string. Here we target the exact cells.
            const cell = xmlDoc.querySelector(`mxCell[id="${id}"]`);
            if (cell) {
                // Escape HTML entities for XML safety
                const safeValue = value
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&apos;")
                    .replace(/\n/g, "&#xa;"); // XML newline

                cell.setAttribute('value', safeValue);
            }
        };

        // Mapping IDs from the provided drawio.xml
        updateVal('rHbPwuJmVqwy9-EArj8U-6', this.dom.form.weight.value);   // Weight
        updateVal('rHbPwuJmVqwy9-EArj8U-7', this.dom.form.atonement.value); // Atonement
        updateVal('rHbPwuJmVqwy9-EArj8U-12', this.dom.form.name.value);     // Name
        updateVal('rHbPwuJmVqwy9-EArj8U-10', this.dom.form.desc.value);     // Desc
        updateVal('rHbPwuJmVqwy9-EArj8U-21', this.dom.form.flavor.value);   // Flavor
        updateVal('rHbPwuJmVqwy9-EArj8U-18', this.dom.form.aux.value);      // Aux

        // Serialize back to string
        const serializer = new XMLSerializer();
        const xmlString = serializer.serializeToString(xmlDoc);
        
        // Trigger Download
        const blob = new Blob([xmlString], { type: 'application/xml' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${this.dom.form.name.value || 'memory-card'}.drawio.xml`;
        link.click();
        URL.revokeObjectURL(link.href);
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    new CardBuilderApplication();
});