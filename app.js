// 1年生と2年生の漢字（教科書順）
const questions = [
  // 1年生の漢字
  { grade:"g1", kanji:"一", icon:"", choices:["いち","に","さん"], answer:"いち" },
  { grade:"g1", kanji:"二", icon:"", choices:["に","いち","さん"], answer:"に" },
  { grade:"g1", kanji:"三", icon:"", choices:["さん","に","よん"], answer:"さん" },
  { grade:"g1", kanji:"四", icon:"", choices:["よん","さん","ご"], answer:"よん" },
  { grade:"g1", kanji:"五", icon:"", choices:["ご","よん","ろく"], answer:"ご" },
  { grade:"g1", kanji:"六", icon:"", choices:["ろく","ご","しち"], answer:"ろく" },
  { grade:"g1", kanji:"七", icon:"", choices:["しち","ろく","はち"], answer:"しち" },
  { grade:"g1", kanji:"八", icon:"", choices:["はち","しち","く"], answer:"はち" },
  { grade:"g1", kanji:"九", icon:"", choices:["きゅう","はち","じゅう"], answer:"きゅう" },
  { grade:"g1", kanji:"十", icon:"", choices:["じゅう","く","ひゃく"], answer:"じゅう" },
  { grade:"g1", kanji:"百", icon:"", choices:["ひゃく","じゅう","せん"], answer:"ひゃく" },
  { grade:"g1", kanji:"千", icon:"", choices:["せん","ひゃく","まん"], answer:"せん" },
  { grade:"g1", kanji:"上", icon:"", choices:["うえ","した","なか"], answer:"うえ" },
  { grade:"g1", kanji:"下", icon:"", choices:["した","うえ","なか"], answer:"した" },
  { grade:"g1", kanji:"中", icon:"", choices:["なか","うえ","した"], answer:"なか" },
  { grade:"g1", kanji:"左", icon:"", choices:["ひだり","みぎ","うえ"], answer:"ひだり" },
  { grade:"g1", kanji:"右", icon:"", choices:["みぎ","ひだり","ひだり"], answer:"みぎ" },
  { grade:"g1", kanji:"大", icon:"", choices:["おおきい","ちいさい","ながい"], answer:"おおきい" },
  { grade:"g1", kanji:"小", icon:"", choices:["ちいさい","おおきい","みじかい"], answer:"ちいさい" },
  { grade:"g1", kanji:"日", icon:"☀️", choices:["ひ","つき","ほし"], answer:"ひ" },
  { grade:"g1", kanji:"月", icon:"🌙", choices:["つき","ひ","ほし"], answer:"つき" },
  { grade:"g1", kanji:"火", icon:"🔥", choices:["ひ","みず","き"], answer:"ひ" },
  { grade:"g1", kanji:"水", icon:"💧", choices:["みず","き","つち"], answer:"みず" },
  { grade:"g1", kanji:"木", icon:"🌲", choices:["き","うみ","いぬ"], answer:"き" },
  { grade:"g1", kanji:"金", icon:"💰", choices:["きん","ぎん","どう"], answer:"きん" },
  { grade:"g1", kanji:"土", icon:"", choices:["つち","ひ","つき"], answer:"つち" },
  { grade:"g1", kanji:"山", icon:"⛰️", choices:["やま","かわ","うみ"], answer:"やま" },
  { grade:"g1", kanji:"川", icon:"", choices:["かわ","もり","そら"], answer:"かわ" },
  { grade:"g1", kanji:"空", icon:"☁️", choices:["そら","はな","つき"], answer:"そら" },
  { grade:"g1", kanji:"花", icon:"🌸", choices:["はな","みず","いし"], answer:"はな" },
  { grade:"g1", kanji:"草", icon:"🌱", choices:["くさ","はな","き"], answer:"くさ" },
  { grade:"g1", kanji:"虫", icon:"🐛", choices:["むし","とり","いぬ"], answer:"むし" },
  { grade:"g1", kanji:"森", icon:"🌳", choices:["もり","かわ","はな"], answer:"もり" },
  { grade:"g1", kanji:"石", icon:"🪨", choices:["いし","みず","そら"], answer:"いし" },
  { grade:"g1", kanji:"雨", icon:"🌧️", choices:["あめ","ゆき","かぜ"], answer:"あめ" },
  { grade:"g1", kanji:"赤", icon:"🔴", choices:["あか","あお","しろ"], answer:"あか" },
  { grade:"g1", kanji:"青", icon:"🔵", choices:["あお","あか","き"], answer:"あお" },
  { grade:"g1", kanji:"白", icon:"⚪", choices:["しろ","くろ","あお"], answer:"しろ" },
  { grade:"g1", kanji:"玉", icon:"💎", choices:["たま","いし","きん"], answer:"たま" },
  { grade:"g1", kanji:"王", icon:"👑", choices:["おう","ひめ","さむらい"], answer:"おう" },
  { grade:"g1", kanji:"音", icon:"🔊", choices:["おと","ひかり","かおり"], answer:"おと" },
  { grade:"g1", kanji:"円", icon:"⭕", choices:["えん","かく","さんかく"], answer:"えん" },
  { grade:"g1", kanji:"貝", icon:"🐚", choices:["かい","さかな","とり"], answer:"かい" },
  { grade:"g1", kanji:"気", icon:"💨", choices:["き","みず","ひ"], answer:"き" },
  { grade:"g1", kanji:"休", icon:"😴", choices:["やすむ","はたらく","あそぶ"], answer:"やすむ" },
  { grade:"g1", kanji:"犬", icon:"🐶", choices:["いぬ","ねこ","とり"], answer:"いぬ" },
  { grade:"g1", kanji:"人", icon:"👤", choices:["ひと","くち","て"], answer:"ひと" },
  { grade:"g1", kanji:"手", icon:"✋", choices:["て","あし","はな"], answer:"て" },
  { grade:"g1", kanji:"足", icon:"🦶", choices:["あし","て","あたま"], answer:"あし" },
  { grade:"g1", kanji:"口", icon:"👄", choices:["くち","め","みみ"], answer:"くち" },
  { grade:"g1", kanji:"目", icon:"👁️", choices:["め","くち","みみ"], answer:"め" },
  { grade:"g1", kanji:"耳", icon:"👂", choices:["みみ","はな","くち"], answer:"みみ" },
  { grade:"g1", kanji:"見", icon:"👀", choices:["みる","きく","はなす"], answer:"みる" },
  { grade:"g1", kanji:"男", icon:"👨", choices:["おとこ","おんな","こども"], answer:"おとこ" },
  { grade:"g1", kanji:"女", icon:"👩", choices:["おんな","おとこ","こども"], answer:"おんな" },
  { grade:"g1", kanji:"子", icon:"👶", choices:["こ","おとこ","おんな"], answer:"こ" },
  { grade:"g1", kanji:"学ぶ", icon:"🎓", choices:["まなぶ","ならう","おしえる"], answer:"まなぶ" },
  { grade:"g1", kanji:"字", icon:"📝", choices:["じ","かき","よみ"], answer:"じ" },
  { grade:"g1", kanji:"出", icon:"⬅️", choices:["でる","はいる","たつ"], answer:"でる" },
  { grade:"g1", kanji:"入", icon:"➡️", choices:["はいる","でる","たつ"], answer:"はいる" },
  { grade:"g1", kanji:"竹", icon:"🎋", choices:["たけ","き","くさ"], answer:"たけ" },
  { grade:"g1", kanji:"生", icon:"🌱", choices:["いきる","し","ね"], answer:"いきる" },
  { grade:"g1", kanji:"正", icon:"✅", choices:["ただしい","まちがう","わからない"], answer:"ただしい" },
  { grade:"g1", kanji:"町", icon:"🏙️", choices:["まち","むら","もり"], answer:"まち" },
  { grade:"g1", kanji:"村", icon:"🏘️", choices:["むら","まち","もり"], answer:"むら" },
  { grade:"g1", kanji:"車", icon:"🚗", choices:["くるま","じてんしゃ","ひこうき"], answer:"くるま" },
  { grade:"g1", kanji:"本", icon:"📖", choices:["ほん","かみ","え"], answer:"ほん" },
  { grade:"g1", kanji:"名", icon:"📛", choices:["な","かた","もの"], answer:"な" },
  { grade:"g1", kanji:"林", icon:"🌲", choices:["はやし","もり","き"], answer:"はやし" },
  { grade:"g1", kanji:"立", icon:"🧍", choices:["たつ","すわる","ねる"], answer:"たつ" },
  { grade:"g1", kanji:"力", icon:"💪", choices:["ちから","はやさ","かしこさ"], answer:"ちから" },
  { grade:"g1", kanji:"校", icon:"🏫", choices:["がっこう","いえ","みせ"], answer:"がっこう" },
  { grade:"g1", kanji:"年", icon:"📅", choices:["とし","つき","ひ"], answer:"とし" },
  { grade:"g1", kanji:"天", icon:"🌤️", choices:["てん","ち","そら"], answer:"てん" },
  { grade:"g1", kanji:"田", icon:"🌾", choices:["た","はたけ","もり"], answer:"た" },
  { grade:"g1", kanji:"先生", icon:"👆", choices:["せんせい","うしろ","なか"], answer:"せんせい" },
  { grade:"g1", kanji:"早い", icon:"⏩", choices:["はやい","おそい","ゆっくり"], answer:"はやい" },
  { grade:"g1", kanji:"糸", icon:"🧵", choices:["いと","ぬの","き"], answer:"いと" },
  { grade:"g1", kanji:"夕", icon:"🌅", choices:["ゆう","あさ","ひる"], answer:"ゆう" },
  { grade:"g1", kanji:"文", icon:"📄", choices:["ぶん","じ","かき"], answer:"ぶん" },
  { grade:"g1", kanji:"中", icon:"", choices:["なか","うえ","した"], answer:"なか" },

  // 2年生の漢字
  { grade:"g2", kanji:"引く", icon:"", choices:["ひく","おす","まわる"], answer:"ひく" },
  { grade:"g2", kanji:"羽", icon:"🪶", choices:["はね","つの","いわ"], answer:"はね" },
  { grade:"g2", kanji:"雲", icon:"☁️", choices:["くも","あめ","そら"], answer:"くも" },
  { grade:"g2", kanji:"公園", icon:"🌳", choices:["こうえん","いえ","みせ"], answer:"こうえん" },
  { grade:"g2", kanji:"遠い", icon:"🔭", choices:["とおい","ちかい","なが"], answer:"とおい" },
  { grade:"g2", kanji:"何", icon:"🤔", choices:["なに","だれ","どこ"], answer:"なに" },
  { grade:"g2", kanji:"科", icon:"📚", choices:["か","もん","との"], answer:"か" },
  { grade:"g2", kanji:"夏", icon:"🌻", choices:["なつ","はる","ふゆ"], answer:"なつ" },
  { grade:"g2", kanji:"家", icon:"🏠", choices:["いえ","がっこう","みせ"], answer:"いえ" },
  { grade:"g2", kanji:"歌", icon:"🎵", choices:["うた","いろ","こえ"], answer:"うた" },
  { grade:"g2", kanji:"画", icon:"🎨", choices:["え","かき","もじ"], answer:"え" },
  { grade:"g2", kanji:"回", icon:"🔄", choices:["かい","まわり","わ"], answer:"かい" },
  { grade:"g2", kanji:"会う", icon:"👥", choices:["あう","あつまり","ひと"], answer:"あう" },
  { grade:"g2", kanji:"海", icon:"🌊", choices:["うみ","かわ","みず"], answer:"うみ" },
  { grade:"g2", kanji:"絵", icon:"🖼️", choices:["え","かき","いろ"], answer:"え" },
  { grade:"g2", kanji:"外", icon:"🚪", choices:["そと","なか","ひばり"], answer:"そと" },
  { grade:"g2", kanji:"角", icon:"🦌", choices:["つの","はね","ひかり"], answer:"つの" },
  { grade:"g2", kanji:"楽しい", icon:"🎶", choices:["たのしい","おんがく","かん"], answer:"たのしい" },
  { grade:"g2", kanji:"活", icon:"⚡", choices:["かつどう","はたらき","ちから"], answer:"かつどう" },
  { grade:"g2", kanji:"間", icon:"🕐", choices:["あいだ","ま","とき"], answer:"あいだ" },
  { grade:"g2", kanji:"丸", icon:"⭕", choices:["まる","わ","えん"], answer:"まる" },
  { grade:"g2", kanji:"岩", icon:"🪨", choices:["いわ","こめ","にく"], answer:"いわ" },
  { grade:"g2", kanji:"顔", icon:"😊", choices:["かお","め","くち"], answer:"かお" },
  { grade:"g2", kanji:"汽", icon:"🚂", choices:["き","みず","そら"], answer:"き" },
  { grade:"g2", kanji:"記", icon:"📝", choices:["しるす","かく","じ"], answer:"しるす" },
  { grade:"g2", kanji:"帰る", icon:"🏡", choices:["かえる","もどる","いく"], answer:"かえる" },
  { grade:"g2", kanji:"弓", icon:"🏹", choices:["ゆみ","や","かたな"], answer:"ゆみ" },
  { grade:"g2", kanji:"牛", icon:"🐄", choices:["うし","うま","ひつじ"], answer:"うし" },
  { grade:"g2", kanji:"魚", icon:"🐟", choices:["さかな","とり","いぬ"], answer:"さかな" },
  { grade:"g2", kanji:"京", icon:"🏯", choices:["きょう","たいしょく","と"], answer:"きょう" },
  { grade:"g2", kanji:"強い", icon:"💪", choices:["つよい","よわい","はやい"], answer:"つよい" },
  { grade:"g2", kanji:"教える", icon:"👨‍🏫", choices:["おしえる","まなぶ","ならう"], answer:"おしえる" },
  { grade:"g2", kanji:"近い", icon:"🤏", choices:["ちかい","とおい","なが"], answer:"ちかい" },
  { grade:"g2", kanji:"兄", icon:"👦", choices:["あに","あね","おとうと"], answer:"あに" },
  { grade:"g2", kanji:"形", icon:"🔺", choices:["かたち","いろ","こえ"], answer:"かたち" },
  { grade:"g2", kanji:"計", icon:"📊", choices:["はかる","けい","かず"], answer:"はかる" },
  { grade:"g2", kanji:"元", icon:"🌍", choices:["もと","はじめ","ねえ"], answer:"もと" },
  { grade:"g2", kanji:"言", icon:"💬", choices:["いう","いとぐち","しゃべる"], answer:"いう" },
  { grade:"g2", kanji:"原", icon:"🌾", choices:["はら","もと","つち"], answer:"はら" },
  { grade:"g2", kanji:"戸", icon:"🚪", choices:["と","ト","いえ"], answer:"と" },
  { grade:"g2", kanji:"古", icon:"📜", choices:["ふるい","むかし","すたれた"], answer:"ふるい" },
  { grade:"g2", kanji:"午", icon:"🕐", choices:["ご","ひる","なか"], answer:"ご" },
  { grade:"g2", kanji:"後", icon:"👇", choices:["あと","うしろ","のち"], answer:"あと" },
  { grade:"g2", kanji:"語", icon:"💬", choices:["ご","ことば","なう"], answer:"ご" },
  { grade:"g2", kanji:"工", icon:"🏭", choices:["たくみ","こう","つくる"], answer:"こう" },
  { grade:"g2", kanji:"公園", icon:"👥", choices:["おおやけ","こうえん","みな"], answer:"こうえん" },
  { grade:"g2", kanji:"広い", icon:"↔️", choices:["ひろい","せまい","ながい"], answer:"ひろい" },
  { grade:"g2", kanji:"交", icon:"🔀", choices:["こう","かわる","たてかえる"], answer:"こう" },
  { grade:"g2", kanji:"光", icon:"✨", choices:["ひかり","あかり","てり"], answer:"ひかり" },
  { grade:"g2", kanji:"考える", icon:"🤔", choices:["かんがえる","おもう","くらべる"], answer:"かんがえる" },
  { grade:"g2", kanji:"行く", icon:"➡️", choices:["いく","ぎょう","おこなう"], answer:"いく" },
  { grade:"g2", kanji:"高い", icon:"⬆️", choices:["たかい","ひくい","なが"], answer:"たかい" },
  { grade:"g2", kanji:"黄", icon:"🟡", choices:["き","あか","あお"], answer:"き" },
  { grade:"g2", kanji:"合う", icon:"🤝", choices:["あう","あわせる","かなう"], answer:"あう" },
  { grade:"g2", kanji:"谷", icon:"🏔️", choices:["たに","にほん","たに"], answer:"たに" },
  { grade:"g2", kanji:"国", icon:"🗾", choices:["くに","こく","ほぼ"], answer:"くに" },
  { grade:"g2", kanji:"黒", icon:"⚫", choices:["くろ","しろ","あお"], answer:"くろ" },
  { grade:"g2", kanji:"今", icon:"⏰", choices:["いま","こん","きょう"], answer:"いま" },
  { grade:"g2", kanji:"才", icon:"🧠", choices:["さい","さい","つかさ"], answer:"さい" },
  { grade:"g2", kanji:"細い", icon:"🧵", choices:["ほそい","ふとい","ながい"], answer:"ほそい" },
  { grade:"g2", kanji:"作る", icon:"🛠️", choices:["つくる","さっ","さく"], answer:"つくる" },
  { grade:"g2", kanji:"算", icon:"🔢", choices:["かぞえる","さん","たし"], answer:"かぞえる" },
  { grade:"g2", kanji:"止める", icon:"🛑", choices:["とめる","やめる","いたる"], answer:"とめる" },
  { grade:"g2", kanji:"市", icon:"🏙️", choices:["いち","し","しかく"], answer:"いち" },
  { grade:"g2", kanji:"矢", icon:"🏹", choices:["や","かど","する"], answer:"や" },
  { grade:"g2", kanji:"姉", icon:"👧", choices:["あね","あに","いもうと"], answer:"あね" },
  { grade:"g2", kanji:"思う", icon:"💭", choices:["おもう","かんがえる","しのぶ"], answer:"おもう" },
  { grade:"g2", kanji:"紙", icon:"📄", choices:["かみ","し","ぬの"], answer:"かみ" },
  { grade:"g2", kanji:"寺", icon:"🏯", choices:["てら","じ","ほとり"], answer:"てら" },
  { grade:"g2", kanji:"自", icon:"🔄", choices:["みずから","じ","おのずから"], answer:"みずから" },
  { grade:"g2", kanji:"時", icon:"🕐", choices:["とき","じ","くぎり"], answer:"とき" },
  { grade:"g2", kanji:"室", icon:"🏠", choices:["むろ","へや","しつ"], answer:"へや" },
  { grade:"g2", kanji:"会社", icon:"👥", choices:["かいしゃ","やしろ","しゃかい"], answer:"かいしゃ" },
  { grade:"g2", kanji:"弱い", icon:"🫧", choices:["よわい","つよい","ちいさい"], answer:"よわい" },
  { grade:"g2", kanji:"首", icon:"🧣", choices:["くび","あたま","こめ"], answer:"くび" },
  { grade:"g2", kanji:"秋", icon:"🍂", choices:["あき","なつ","はる"], answer:"あき" },
  { grade:"g2", kanji:"週", icon:"📅", choices:["しゅう","ひと","とかい"], answer:"しゅう" },
  { grade:"g2", kanji:"春", icon:"🌸", choices:["はる","なつ","あき"], answer:"はる" },
  { grade:"g2", kanji:"書く", icon:"✍️", choices:["かく","かき","しゃ"], answer:"かく" },
  { grade:"g2", kanji:"少ない", icon:"👌", choices:["すくない","おおい","ちいさい"], answer:"すくない" },
  { grade:"g2", kanji:"場所", icon:"🏘️", choices:["ばしょ","ところ","たい"], answer:"ばしょ" },
  { grade:"g2", kanji:"色", icon:"🎨", choices:["いろ","しき","かたち"], answer:"いろ" },
  { grade:"g2", kanji:"食べる", icon:"🍽️", choices:["たべる","しょく","くう"], answer:"たべる" },
  { grade:"g2", kanji:"心", icon:"❤️", choices:["こころ","からだ","あたま"], answer:"こころ" },
  { grade:"g2", kanji:"新しい", icon:"✨", choices:["あたらしい","しん","にいどし"], answer:"あたらしい" },
  { grade:"g2", kanji:"親", icon:"👨‍👩‍👧‍👦", choices:["おや","した","かなしい"], answer:"おや" },
  { grade:"g2", kanji:"図", icon:"📊", choices:["ず","と","えがく"], answer:"ず" },
  { grade:"g2", kanji:"数", icon:"🔢", choices:["かず","きた","たくし"], answer:"かず" },
  { grade:"g2", kanji:"西", icon:"⬅️", choices:["にし","ひがし","きた"], answer:"にし" },
  { grade:"g2", kanji:"声", icon:"🔊", choices:["こえ","こわ","さけえ"], answer:"こえ" },
  { grade:"g2", kanji:"星", icon:"⭐", choices:["ほし","つき","ひ"], answer:"ほし" },
  { grade:"g2", kanji:"晴れ", icon:"☀️", choices:["はれ","せい","したがう"], answer:"はれ" },
  { grade:"g2", kanji:"切る", icon:"✂️", choices:["きる","かたい","もっぱら"], answer:"きる" },
  { grade:"g2", kanji:"雪", icon:"❄️", choices:["ゆき","あめ","ふる"], answer:"ゆき" },
  { grade:"g2", kanji:"船", icon:"🚢", choices:["ふね","ひこうき","くるま"], answer:"ふね" },
  { grade:"g2", kanji:"線", icon:"📏", choices:["せん","より","つなぐ"], answer:"せん" },
  { grade:"g2", kanji:"前", icon:"👆", choices:["まえ","うしろ","ゆく"], answer:"まえ" },
  { grade:"g2", kanji:"組", icon:"👥", choices:["くみ","なかま","したがえる"], answer:"くみ" },
  { grade:"g2", kanji:"走る", icon:"🏃", choices:["はしる","にげる","のぞく"], answer:"はしる" },
  { grade:"g2", kanji:"多い", icon:"🔂", choices:["おおい","さまざま","まさる"], answer:"おおい" },
  { grade:"g2", kanji:"太い", icon:"🧶", choices:["ふとい","ほそい","たいこく"], answer:"ふとい" },
  { grade:"g2", kanji:"体", icon:"🏃", choices:["からだ","こころ","て"], answer:"からだ" },
  { grade:"g2", kanji:"台", icon:"🪑", choices:["だい","うてな","ものがたり"], answer:"だい" },
  { grade:"g2", kanji:"地", icon:"🌍", choices:["ち","ところ","てん"], answer:"ち" },
  { grade:"g2", kanji:"池", icon:"🌊", choices:["いけ","うみ","かわ"], answer:"いけ" },
  { grade:"g2", kanji:"知る", icon:"🧠", choices:["しる","さとい","さしずする"], answer:"しる" },
  { grade:"g2", kanji:"茶", icon:"☕", choices:["ちゃ","びきせ","さと"], answer:"ちゃ" },
  { grade:"g2", kanji:"昼", icon:"☀️", choices:["ひる","ひ","!も"], answer:"ひる" },
  { grade:"g2", kanji:"長い", icon:"📏", choices:["ながい","ちょう","つかさ"], answer:"ながい" },
  { grade:"g2", kanji:"鳥", icon:"🐦", choices:["とり","さかな","いぬ"], answer:"とり" },
  { grade:"g2", kanji:"朝", icon:"🌅", choices:["あさ","ほう","ていちん"], answer:"あさ" },
  { grade:"g2", kanji:"直す", icon:"➡️", choices:["なおす","ちょく","すぐ"], answer:"なおす" },
  { grade:"g2", kanji:"通る", icon:"🚶", choices:["とおる","つう","かよう"], answer:"とおる" },
  { grade:"g2", kanji:"弟", icon:"👦", choices:["おとうと","あに","あね"], answer:"おとうと" },
  { grade:"g2", kanji:"店", icon:"🏪", choices:["みせ","てん","みるく"], answer:"みせ" },
  { grade:"g2", kanji:"点", icon:"⭐", choices:["てん","つ","し"], answer:"てん" },
  { grade:"g2", kanji:"電気", icon:"⚡", choices:["でん","でんき","うごく"], answer:"でんき" },
  { grade:"g2", kanji:"刀", icon:"🗡️", choices:["かたな","とう","ほうちゅう"], answer:"かたな" },
  { grade:"g2", kanji:"冬", icon:"❄️", choices:["ふゆ","はる","なつ"], answer:"ふゆ" },
  { grade:"g2", kanji:"当たる", icon:"🎯", choices:["あたる","とう","ぶ"], answer:"あたる" },
  { grade:"g2", kanji:"東", icon:"➡️", choices:["ひがし","とう","あずま"], answer:"ひがし" },
  { grade:"g2", kanji:"答える", icon:"✅", choices:["こたえる","とう","まかせる"], answer:"こたえる" },
  { grade:"g2", kanji:"頭", icon:"🧠", choices:["あたま","かお","かみ"], answer:"あたま" },
  { grade:"g2", kanji:"同じ", icon:"🤝", choices:["おなじ","どう","おなき"], answer:"おなじ" },
  { grade:"g2", kanji:"道", icon:"🛣️", choices:["みち","どう","さとし"], answer:"みち" },
  { grade:"g2", kanji:"読む", icon:"📖", choices:["よむ","どく","たくし"], answer:"よむ" },
  { grade:"g2", kanji:"内", icon:"🏠", choices:["うち","ない","したがう"], answer:"うち" },
  { grade:"g2", kanji:"南", icon:"⬇️", choices:["みなみ","なん","あきら"], answer:"みなみ" },
  { grade:"g2", kanji:"肉", icon:"🥩", choices:["にく","こめ","いわ"], answer:"にく" },
  { grade:"g2", kanji:"馬", icon:"🐎", choices:["うま","ば","さとし"], answer:"うま" },
  { grade:"g2", kanji:"売る", icon:"💰", choices:["うる","かう","いえ"], answer:"うる" },
  { grade:"g2", kanji:"買う", icon:"🛒", choices:["かう","うる","いく"], answer:"かう" },
  { grade:"g2", kanji:"麦", icon:"🌾", choices:["むぎ","こめ","はな"], answer:"むぎ" },
  { grade:"g2", kanji:"半", icon:"↔️", choices:["はん","なか","わけ"], answer:"はん" },
  { grade:"g2", kanji:"番", icon:"🔢", choices:["ばん","つく","たす"], answer:"ばん" },
  { grade:"g2", kanji:"父", icon:"👨", choices:["ちち","おとうさん","ちち"], answer:"ちち" },
  { grade:"g2", kanji:"風", icon:"💨", choices:["かぜ","ふう","そよ"], answer:"かぜ" },
  { grade:"g2", kanji:"分ける", icon:"⏱️", choices:["わける","ぶん","わかる"], answer:"わける" },
  { grade:"g2", kanji:"聞く", icon:"👂", choices:["きく","もん","たずぬ"], answer:"きく" },
  { grade:"g2", kanji:"米", icon:"🍚", choices:["こめ","べい","にく"], answer:"こめ" },
  { grade:"g2", kanji:"歩く", icon:"🚶", choices:["あるく","ほ","たより"], answer:"あるく" },
  { grade:"g2", kanji:"母", icon:"👩", choices:["はは","おかあさん","ぶ"], answer:"はは" },
  { grade:"g2", kanji:"方", icon:"👉", choices:["かた","ほう","あたり"], answer:"かた" },
  { grade:"g2", kanji:"北", icon:"⬆️", choices:["きた","ほく","あきら"], answer:"きた" },
  { grade:"g2", kanji:"毎日", icon:"📅", choices:["ごと","まいにち","つね"], answer:"まいにち" },
  { grade:"g2", kanji:"妹", icon:"👧", choices:["いもうと","ぶ","すえ"], answer:"いもうと" },
  { grade:"g2", kanji:"万", icon:"🔢", choices:["よろず","まん","かず"], answer:"まん" },
  { grade:"g2", kanji:"明るい", icon:"☀️", choices:["あかるい","めい","さとし"], answer:"あかるい" },
  { grade:"g2", kanji:"鳴く", icon:"🔊", choices:["なく","めい","ひびく"], answer:"なく" },
  { grade:"g2", kanji:"毛", icon:"🧶", choices:["け","もう","さとし"], answer:"け" },
  { grade:"g2", kanji:"門", icon:"🚪", choices:["かど","もん","きみ"], answer:"かど" },
  { grade:"g2", kanji:"夜", icon:"🌙", choices:["よる","や","あし"], answer:"よる" },
  { grade:"g2", kanji:"野", icon:"🌾", choices:["の","や","あきら"], answer:"の" },
  { grade:"g2", kanji:"友", icon:"👫", choices:["とも","ゆう","さとし"], answer:"とも" },
  { grade:"g2", kanji:"用", icon:"⚙️", choices:["つかう","よう","もち"], answer:"つかう" },
  { grade:"g2", kanji:"曜日", icon:"📅", choices:["ようび","あきらめ","きらめく"], answer:"ようび" },
  { grade:"g2", kanji:"来る", icon:"👋", choices:["くる","らい","いたる"], answer:"くる" },
  { grade:"g2", kanji:"里", icon:"🏘️", choices:["さと","り","あたり"], answer:"さと" },
  { grade:"g2", kanji:"理", icon:"🧠", choices:["ことわり","り","さとし"], answer:"ことわり" },
  { grade:"g2", kanji:"話す", icon:"💬", choices:["はなす","わ","ことば"], answer:"はなす" },
];

// ── audio ──────────────────────────────────────────────────────
const okSound = document.getElementById("sound-ok");
const ngSound = document.getElementById("sound-ng");

// ── localStorage ──────────────────────────────────────────────
const WEAK_KEYS = { g1: "kapp_weak_g1", g2: "kapp_weak_g2" };

function loadWeakList(grade) {
  try { return JSON.parse(localStorage.getItem(WEAK_KEYS[grade])) || []; }
  catch { return []; }
}
function saveWeakList(grade, list) {
  localStorage.setItem(WEAK_KEYS[grade], JSON.stringify(list));
}
function markWeak(grade, kanji) {
  const list = loadWeakList(grade);
  if (!list.includes(kanji)) saveWeakList(grade, [...list, kanji]);
}
function clearWeak(grade, kanji) {
  saveWeakList(grade, loadWeakList(grade).filter(k => k !== kanji));
}

// ── state ──────────────────────────────────────────────────────
let currentIndex = 0;
let correctCount = 0;
let totalAnswered = 0;
let autoNextTimer = null;
let activeLevel = "g2";
let filteredQuestions = [];
let isReviewMode = false;

// ── DOM refs ───────────────────────────────────────────────────
const questionEl       = document.getElementById("question");
const choicesWrap      = document.getElementById("choices");
const messageEl        = document.getElementById("message");
const scoreEl          = document.getElementById("score");
const sparkles         = document.getElementById("sparkles");
const startScreen      = document.getElementById("startScreen");
const resultsScreen    = document.getElementById("resultsScreen");
const startBtn         = document.getElementById("startBtn");
const startReviewBtn   = document.getElementById("startReviewBtn");
const startWeakInfo    = document.getElementById("startWeakInfo");
const retryBtn         = document.getElementById("retryBtn");
const reviewBtn        = document.getElementById("reviewBtn");
const resultScore      = document.getElementById("resultScore");
const resultMedal      = document.getElementById("resultMedal");
const resultsTitle     = document.getElementById("resultsTitle");
const weakCountDisplay = document.getElementById("weakCountDisplay");

// ── helpers ────────────────────────────────────────────────────
function getFilteredQuestions() {
  return questions.filter(q => q.grade === activeLevel);
}

function getMedal(score, total) {
  if (score === total)                  return "🥇 すごい！パーフェクト！";
  if (score >= Math.ceil(total * 0.7)) return "🥈 すごい！よくできたね！";
  if (score >= Math.ceil(total * 0.4)) return "🥉 がんばったね！";
  return "🌱 つぎもやってみよう！";
}

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ── render ─────────────────────────────────────────────────────
function renderQuestion() {
  const q = filteredQuestions[currentIndex];
  if (!q) return;

  const label = isReviewMode ? "復習" : "正解";
  scoreEl.textContent = `${label} ${correctCount} / ${filteredQuestions.length}問中`;

  const icon = q.icon ? `${q.icon} ` : "";
  questionEl.textContent = `${icon}「${q.kanji}」はどれ？`;

  choicesWrap.innerHTML = "";
  messageEl.textContent = "";

  shuffleArray(q.choices).forEach(text => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = "choiceBtn";
    btn.addEventListener("click", () => checkAnswer(text));
    choicesWrap.appendChild(btn);
  });
}

// ── answer ─────────────────────────────────────────────────────
function checkAnswer(selected) {
  choicesWrap.querySelectorAll("button").forEach(b => b.disabled = true);

  const q = filteredQuestions[currentIndex];
  const sel = String(selected).trim();
  const ans = String(q.answer).trim();

  if (sel === ans) {
    messageEl.textContent = "正解！ 🎉";
    messageEl.style.color = "var(--ok)";
    if (okSound) { okSound.currentTime = 0; okSound.play(); }
    sparkleBurst();
    clearWeak(q.grade, q.kanji);
    correctCount++;
  } else {
    messageEl.textContent = `ちがうよ。正解は「${q.answer}」`;
    messageEl.style.color = "var(--ng)";
    if (ngSound) { ngSound.currentTime = 0; ngSound.play(); }
    markWeak(q.grade, q.kanji);
  }

  totalAnswered++;

  if (autoNextTimer) clearTimeout(autoNextTimer);
  autoNextTimer = setTimeout(() => {
    if (totalAnswered >= filteredQuestions.length) {
      showResults();
    } else {
      messageEl.style.color = "";
      currentIndex = (currentIndex + 1) % filteredQuestions.length;
      renderQuestion();
    }
  }, 2000);
}

// ── results ────────────────────────────────────────────────────
function showResults() {
  const weakList = loadWeakList(activeLevel);

  if (isReviewMode) {
    resultsTitle.textContent = "✨ 復習おわり！";
    resultScore.textContent = `${correctCount} / ${filteredQuestions.length} できたよ！`;
    resultMedal.textContent = correctCount === filteredQuestions.length
      ? "🌟 全部できた！すごい！"
      : "💪 よくがんばったね！";
  } else {
    resultsTitle.textContent = "🎉 クイズ終了！";
    resultScore.textContent = `${correctCount} / ${filteredQuestions.length} 正解！`;
    resultMedal.textContent = getMedal(correctCount, filteredQuestions.length);
  }

  if (weakList.length > 0) {
    weakCountDisplay.textContent = `まだ苦手な漢字が ${weakList.length} 問あるよ`;
    reviewBtn.textContent = `苦手を復習する（${weakList.length}問）`;
    reviewBtn.classList.remove("hidden");
  } else {
    weakCountDisplay.textContent = "苦手な漢字はないよ！🌈";
    reviewBtn.classList.add("hidden");
  }

  resultsScreen.classList.remove("hidden");
}

// ── game flow ──────────────────────────────────────────────────
function initGame(reviewMode) {
  isReviewMode = reviewMode;
  correctCount = 0;
  totalAnswered = 0;
  currentIndex = 0;
  messageEl.style.color = "";
  messageEl.textContent = "";
  startScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
}

function startGame() {
  initGame(false);
  filteredQuestions = shuffleArray(getFilteredQuestions());
  renderQuestion();
}

function startReview() {
  const weakList = loadWeakList(activeLevel);
  const weakQuestions = questions.filter(q => q.grade === activeLevel && weakList.includes(q.kanji));
  if (weakQuestions.length === 0) return;
  initGame(true);
  filteredQuestions = shuffleArray(weakQuestions);
  renderQuestion();
}

function updateStartScreenWeakInfo() {
  const weakList = loadWeakList(activeLevel);
  if (weakList.length > 0) {
    startWeakInfo.textContent = `まえにまちがえた漢字が ${weakList.length} 問あるよ`;
    startReviewBtn.textContent = `苦手を復習する（${weakList.length}問）`;
    startReviewBtn.classList.remove("hidden");
  } else {
    startWeakInfo.textContent = "";
    startReviewBtn.classList.add("hidden");
  }
}

// ── event listeners ────────────────────────────────────────────
startBtn.addEventListener("click", startGame);
retryBtn.addEventListener("click", () => location.reload());
reviewBtn.addEventListener("click", startReview);
startReviewBtn.addEventListener("click", startReview);

const levelSelect = document.getElementById("level");
if (levelSelect) {
  levelSelect.addEventListener("change", e => {
    activeLevel = e.target.value === "1年生" ? "g1" : "g2";
    filteredQuestions = shuffleArray(getFilteredQuestions());
    correctCount = 0;
    totalAnswered = 0;
    currentIndex = 0;
    renderQuestion();
  });
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeLevel = tab.dataset.grade === '1' ? 'g1' : 'g2';
    filteredQuestions = shuffleArray(getFilteredQuestions());
    correctCount = 0;
    totalAnswered = 0;
    currentIndex = 0;
    renderQuestion();
  });
});

// ── init ───────────────────────────────────────────────────────
updateStartScreenWeakInfo();

// ── sparkle ────────────────────────────────────────────────────
function sparkleBurst() {
  if (!sparkles) return;
  sparkles.innerHTML = "";
  const count = 14;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    const dx = (Math.random() * 260 - 130).toFixed(0) + "px";
    const dy = (Math.random() * 220 - 110).toFixed(0) + "px";
    s.style.setProperty("--dx", dx);
    s.style.setProperty("--dy", dy);
    const size = 8 + Math.random() * 10;
    s.style.width = size + "px";
    s.style.height = size + "px";
    const r = 220 + Math.floor(Math.random() * 35);
    const g = 220 + Math.floor(Math.random() * 35);
    const b = 200 + Math.floor(Math.random() * 55);
    s.style.background = `rgb(${r},${g},${b})`;
    sparkles.appendChild(s);
  }
  setTimeout(() => { if (sparkles) sparkles.innerHTML = ""; }, 800);
}

