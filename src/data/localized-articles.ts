/** Complete all 45 articles and review sources before routing any locale pages. */
import type { LocaleSlug } from "./localized-swipey";
export const comparisonKeys = ["candy-ai", "crushon-ai", "ourdream-ai", "girlfriendgpt", "lovescape"] as const;
export type ComparisonKey = typeof comparisonKeys[number];
export interface ComparisonCopy {
  title: string;
  description: string;
  intro: string;
  sections: [string, string[]][];
  test: string;
  verdict: string;
}
export const swipeySources = [
  { name: "Swipey AI product explanation", url: "https://swipey.ai/faq/getting-started/how-swipey-ai-works" },
  { name: "Swipey AI model types", url: "https://swipey.ai/faq/ai-features/platform-models-vs-verified-creator-models-vs-custom-ai" },
  { name: "Swipey AI pricing", url: "https://swipey.ai/pricing" },
  { name: "Swipey AI privacy policy", url: "https://swipey.ai/privacy-policy" },
  { name: "Swipey AI Fan Club FAQ", url: "https://swipey.ai/faq/hearts-billing/does-premium-include-a-fan-club" },
];
export const competitorSources: Record<ComparisonKey, { name: string; url: string }[]> = {
  "candy-ai": [{ name: "Candy AI official site", url: "https://candy.ai/" }, { name: "Candy AI privacy notice", url: "https://candy.ai/privacy-policy" }],
  "crushon-ai": [{ name: "CrushOn AI official site", url: "https://crushon.ai/" }, { name: "CrushOn AI model creation", url: "https://aiwiki.crushon.ai/wiki/Model_Creation" }, { name: "CrushOn AI view memory", url: "https://aiwiki.crushon.ai/wiki/View_Memory" }],
  "ourdream-ai": [{ name: "OurDream AI official site", url: "https://ourdream.ai/" }],
  girlfriendgpt: [{ name: "GirlfriendGPT official site", url: "https://www.gptgirlfriend.online/" }, { name: "GirlfriendGPT terms", url: "https://www.gptgirlfriend.online/legal/terms" }, { name: "GirlfriendGPT privacy notice", url: "https://www.gptgirlfriend.online/legal/privacy" }, { name: "GirlfriendGPT creator", url: "https://www.gptgirlfriend.online/create/advanced" }],
  lovescape: [{ name: "Lovescape official site", url: "https://lovescape.com/" }, { name: "Lovescape terms", url: "https://lovescape.com/terms" }],
};
export const comparisonCopy: Partial<Record<LocaleSlug, Record<ComparisonKey, ComparisonCopy>>> = {
  ja: {
    "candy-ai": {
      title: "Swipey AI vs Candy AI：フィード、人物設定、動画と費用を比べる",
      description: "Swipey AI と Candy AI の Discover/Feed、人物作成、会話、音声、画像・動画、追加課金とプライバシーを目的別に比較します。",
      intro: "両サービスには人物探索と作成、会話、音声、画像・動画があります。Candy AI にフィードがない、Swipey AI にしか動画がない、といった単純な対比は正確ではありません。違いを探すなら、Swipey の三種類の人物と Verified Creator の Fan Club、Candy の作成導線を分けて見ます。",
      sections: [
        ["発見した人物の出どころ", ["Swipey AI の Explorer Feed には、プラットフォーム制作人物と検証済みクリエイターに結び付く AI ペルソナなどが並びます。Candy AI の現行トップページにも Discover と Shorts があり、既存人物の探索と新しい人物の作成が可能です。", "同じ『人物を探す』操作でも、プロフィールに実在の制作者が関与するのか、純粋な架空人物なのかを読み分けます。クリエイター本人が返信すると推測せず、各サービスの表示と契約対象を確認してください。"]],
        ["人物を作った後の会話", ["Candy AI は外見、声、性格などを選ぶ作成機能を案内します。Swipey も Custom AI を作れますが、公式FAQは自作人物との会話に Premium が必要と説明します。作成無料という入口だけで長期利用コストを判断しないでください。", "同じ架空の週末予定を両方に設定し、話題を変えて戻した時に約束と口調が続くか確かめます。当サイトは実際の記憶成績を測定していないので、どちらが『賢い』とは断定しません。"]],
        ["音声・画像・動画の単価", ["両社とも複数の媒体を案内しています。ただし、閲覧できる機能と生成・通話できる量、失敗時の再試行、動画の長さはプラン次第です。Swipey では Premium、Hearts、場合によって Fan Club を別々に数えます。", "Candy AI でもサブスクリプションとトークン等の条件を現在の画面で調べ、同じ一週間の使い方を当てはめます。宣伝文句や初回割引だけで比較しない方が実用的です。"]],
        ["プライバシーと結論の限界", ["人物が非公開でも、会話、利用履歴、技術的データの処理がゼロとは限りません。両社のプライバシー文書を開き、退会後の保管や削除の方法を確認します。実在者の顔や声を許可なく模倣しないでください。", "公式機能と実際の使い心地は別です。画像が気に入るか、会話が続くか、余分な課金が必要かは自分のシナリオで確かめる必要があります。"]]
      ],
      test: "同じ架空人物の設定で、探索に要した時間、六往復後の約束の記憶、画像二回と短い音声利用の費用を記録してください。どちらも現在の支払い画面で最終確認します。",
      verdict: "Verified Creator と Fan Club を含む探索層が必要なら Swipey AI を詳しく見る価値があります。案内に沿った人物設定が最優先なら Candy AI も比較候補です。両方に発見機能と複数媒体があるため、単純な機能数ではなく自分の継続費用で選びます。"
    },
    "crushon-ai": {
      title: "Swipey AI vs CrushOn AI：人物の出どころ、モデル設定、記憶",
      description: "Swipey AI の三種類の人物と CrushOn AI のコミュニティ人物・モデル設定を、長い会話、公開範囲、費用で比較します。",
      intro: "Swipey AI は Explorer Feed から人物を見つけ、Platform、Verified Creator、Custom AI を区別します。CrushOn AI はコミュニティの人物とモデル作成の設定が重要です。どちらも『キャラクターが多い』だけでは自分に合う会話を保証しません。",
      sections: [
        ["カードの発見と作者情報", ["Swipey の Feed は画像や動画から会話へ移る導線です。CrushOn では公開人物の説明やタグ、作成者の意図を読むことが重要になります。匿名のカード、制作者に結び付く AI ペルソナ、自作の人物では期待する権利と公開範囲が違います。", "最初の挨拶だけでなく、背景設定、口調、境界、人物の公開状態を確認します。実在する人の名前や画像を無断で使った人物は避けてください。"]],
        ["モデル制御と記憶の意味", ["CrushOn の公式 Wiki は基礎モデル、適用バージョン、プロンプトの設定を説明します。また別ページで保存された Memory の閲覧を案内します。Swipey の関係進行や記憶の宣伝と同じ概念だと思わず、何が保存され、何が現在の会話文脈だけなのかを区別します。", "週末の架空の約束を入れ、数往復後に戻り、可能なら別セッションでも確認します。『長いコンテキスト』が常に一貫した人格を意味するわけではありません。"]],
        ["媒体の広さと費用", ["Swipey は通話、画像、動画、Fan Club と Hearts を公式に案内しています。CrushOn では選んだモデルや長文会話の利用枠が重要になります。媒体数が多くても、あなたが文字会話だけを使うなら価値は変わります。", "それぞれの現行プランで、実際に使う一週間のメッセージ、必要なモデル、画像、通話を別々に積算します。当サイトは固定価格や無料メッセージ数を保証しません。"]],
        ["公開とプライバシー", ["コミュニティ人物の公開設定と、会話内容の保管は別の問題です。プロフィールに秘密を書かず、サービスごとの履歴削除と保存期間を確認してください。", "モデルを自作するなら、他人の顔、声、作品の権利と同意を確かめます。成人を想定した安全な架空設定で比較する方が再現性も高くなります。"]]
      ],
      test: "同じ短い人物設定を両方で作り、六往復後と別セッションでの記憶、公開状態、モデル選択、必要な課金を表にして比較してください。",
      verdict: "フィードと通話・映像、クリエイター層まで使いたいなら Swipey AI が候補です。モデルのプロンプトやコミュニティ人物の振る舞いを細かく見たいなら CrushOn AI が適します。品質の優劣は同じ場面で自分で確認する必要があります。"
    },
    "ourdream-ai": {
      title: "Swipey AI vs OurDream AI：二つの Feed と人物・画像制作",
      description: "両社の Feed を前提に、Swipey AI の三種類の人物と OurDream AI の人物設定、ロールプレイ、画像・動画制作と費用を比べます。",
      intro: "OurDream AI にも Feed と Community があります。したがって『Swipey はフィード、OurDream は制作のみ』ではありません。違いは、Swipey の Verified Creator と Fan Club を含む人物の出どころと、OurDream の外見・性格・声を設定して会話や生成へ進む創作作業をどう使うかです。",
      sections: [
        ["発見した後の進み方", ["Swipey の Explorer Feed は短い動画、画像、人物カードから会話に入ります。OurDream の現行サイトも Explore、Feed、Community、Create、Generate を案内します。両者で発見から人物編集まで何回操作が必要か、保存した人物へ戻れるかを確認します。", "どちらの Feed が魅力的かは表示数だけで決められません。試したい人物が見つかるまでの時間と、プロフィールに必要な説明があるかを記録する方が具体的です。"]],
        ["人物の統一感", ["OurDream の公式説明は外見、性格、声を調整したコンパニオン作成、会話と画像生成を案内します。Swipey の Custom AI も外見や性格の設計が可能ですが、会話へのアクセス条件を別途確認する必要があります。", "同じ架空人物を、場所と服装だけ変えた二つの安全な場面で生成し、顔や設定が保たれるか見ます。画像の出来と会話の一貫性を一つの点数に混ぜないでください。"]],
        ["媒体と通貨", ["OurDream のサイトには有料プランと DreamCoins の説明があります。Swipey には Premium、Hearts、Fan Club の別レイヤーがあります。現在の価格や付与数は変わり得るので、同じ画像・動画・通話の使い方に必要な額をそれぞれの結帳画面で計算します。", "生成に失敗した場合の再試行、保存した出力の利用権、画像を元にした動画の条件も確認すべきです。『無制限』という宣伝語がすべての媒体に適用されると推測しないでください。"]],
        ["権利と安全な素材", ["実在者の顔や声を許可なく取り込まず、明らかに成人の架空人物に限定します。キャラクターを他者に公開する場合はライセンスや削除方法も確認してください。", "当サイトは生成機能を提供せず、実際の画質を測定したとも主張しません。公式説明を出発点に、出力と費用を読者自身が検証する記事です。"]]
      ],
      test: "両サービスで同じ架空人物を設定し、Feed から作成画面までの操作、二枚の非露骨な画像の顔の一貫性、一本の短い動画の条件と実費を記録してください。",
      verdict: "検証済みクリエイターに結び付く人物や Fan Club に関心があれば Swipey AI、人物の外見とロールプレイ、画像生成の制作手順を中心に据えるなら OurDream AI を比較します。両方に Feed があるため、そこだけでは選べません。"
    },
    girlfriendgpt: {
      title: "Swipey AI vs GirlfriendGPT：クリエイター層と人物カード",
      description: "Swipey AI の Platform/Creator/Custom AI と GirlfriendGPT の人物探索・自作・画像ツールを、権利、会話、費用で比較します。",
      intro: "両方とも人物を見つける入口と自分で作る入口があります。ただし Swipey AI の Verified Creator Model は参加する実在クリエイターに結び付き、Fan Club という追加の価値判断があります。GirlfriendGPT は人物カードの発見と自作・画像制作を別々に見ると違いが分かりやすくなります。",
      sections: [
        ["誰が人物を作ったか", ["Swipey の公式FAQは Platform、Verified Creator、Custom AI を明確に区別します。GirlfriendGPT では公開された人物カードを巡るか、自分の設定を使って人物を作ります。プロフィールの魅力だけでなく、制作者、公開範囲、画像の権利を確認してください。", "実在クリエイターの AI ペルソナは、その人がすべてのメッセージを手書きするという意味ではありません。一方、コミュニティ人物が存在することは、その素材の利用許可を保証しません。"]],
        ["会話と画像を別の試験に", ["同じ架空の場面で、導入の自然さ、六往復後の設定維持、キャラクターの主体性を比べます。画像は別に二枚生成し、顔や雰囲気の一貫性を記録します。", "GirlfriendGPT の公式作成画面は人物や画像の設定項目を案内していますが、それが必ず高品質の出力になるという証拠ではありません。当サイトは画像生成を実測していないため、比較手順のみ提示します。"]],
        ["契約の構造", ["Swipey では Premium、Hearts、Fan Club のどれが予定する使い方に必要か整理します。GirlfriendGPT では無料入口、サブスクリプションやクレジット、生成機能の条件を現行規約と結帳画面で調べます。", "両者の固定価格を古い記事から転載せず、メッセージ、画像、通話または動画を一週間使った場合の総費用を計算します。クリエイターの会員資格が必要なら、その費用も含めてください。"]],
        ["プライバシーと人物の権利", ["個人の秘密を架空人物の設定に混ぜず、サービスの会話保存と退会時の扱いを確認します。モデルが非公開でも、提供元がデータを全く処理しないとは言えません。", "特に実在する人の顔や声を真似る場合は、明確な許可と適切な権利が必要です。公開カードの画像も無断で再利用しないでください。"]]
      ],
      test: "同じ架空人物を両方で作り、最初の会話、話題転換後の記憶、二枚の画像、公開設定と一週間の費用を記録してください。両方で出典と権利を確認します。",
      verdict: "実在クリエイターに結び付いた AI ペルソナと Fan Club を重視するなら Swipey AI。公開人物の探索や自作・画像ツールを主眼にするなら GirlfriendGPT も候補です。素材の権利と費用は選択前に必ず確認してください。"
    },
    lovescape: {
      title: "Swipey AI vs Lovescape：人物発見か、会話から動画までの制作か",
      description: "Swipey AI の Feed と検証済みクリエイター層を、Lovescape の会話・物語・画像・動画をつなぐ制作環境と比較します。",
      intro: "Lovescape の現行サイトは成人向けの会話、物語、画像、動画を一つの架空人物と設定でつなぐ制作環境を案内しています。これは単なる『関係進行アプリ』という説明より具体的です。Swipey AI の Feed とクリエイター体験が必要か、意図した場面を複数媒体へ展開したいかで比較します。",
      sections: [
        ["入口：探索かプロンプトか", ["Swipey の Explorer Feed では短い映像、画像、カードから人物を探します。Lovescape は人物の外見、場面、物語の方向を設定し、会話や画像生成を始める作業を前面に出します。", "どちらも画像や動画があるため、機能の有無だけでは違いは分かりません。人物を発見する時間と、一つの構想を作り込む時間をそれぞれ測ると、自分に合う入口が見えてきます。"]],
        ["一貫した設定を媒体へ渡す", ["Lovescape は会話で場面や人物像を定め、それを物語、画像、動画のプロンプトに生かす流れを公式に説明します。Swipey は同じ人物とのチャット、通話、画像、動画を案内しますが、クリエイターに結び付く人物か自作人物かで権限が変わります。", "非露骨な架空の一場面を決め、人物の特徴がテキスト、画像、動画を通じて続くか確認してください。宣伝上の『一貫性』を無条件の成功率だとは見なしません。"]],
        ["料金と出力の権利", ["Swipey では Premium、Hearts、Fan Club の利用場面を切り分けます。Lovescape では画像や動画の現在の生成条件、失敗時の再試行、保存・削除、出力の権利を現行の規約と画面で確かめます。", "一枚の画像と一本の短い動画を完成させるまでの実費が、入口の月額表示より重要です。当サイトはどちらの品質や生成成功率も実測していません。"]],
        ["成人と同意の境界", ["Lovescape の公式説明は成人の架空人物と、本人が作成したか使用許可のある素材を求めています。Swipey のモデルやクリエイター層を扱う時も、実在者の顔・声の権利と明確な同意を軽視できません。", "未成年に見える人物や同意のない実在者を使わず、プライバシーと削除条件を確認します。ここでは露骨な内容を掲載したり生成したりしません。"]]
      ],
      test: "同じ成人の架空人物と安全な場面で、人物発見から出力までの操作、画像二枚と短い動画の一貫性、費用、削除方法を記録してください。",
      verdict: "発見の速さと検証済みクリエイターの Fan Club が目的なら Swipey AI を調べます。一つの構想を会話、物語、画像、動画へ展開したいなら Lovescape の制作手順を比較します。どちらも実際の出力と現行条件を確認してから選ぶべきです。"
    }
  },
  ko: {
    "candy-ai": {
      title: "Swipey AI vs Candy AI: 피드, 캐릭터 제작, 미디어 비용",
      description: "두 서비스의 발견 화면과 캐릭터 설정, 대화, 음성, 이미지·영상, 구독과 추가 결제 조건을 비교합니다.",
      intro: "Candy AI에도 Discover와 Shorts가 있고 두 제품 모두 캐릭터 제작과 다양한 미디어를 안내합니다. 따라서 한쪽에만 피드가 있다고 말할 수 없습니다. Swipey AI의 세 캐릭터 출처와 검증된 크리에이터의 Fan Club이 실제로 필요한지부터 구분해야 합니다.",
      sections: [
        ["카드의 출처와 탐색 방식", ["Swipey Explorer Feed에는 플랫폼 제작 인물, 크리에이터와 연결된 AI 페르소나 등이 보입니다. Candy AI의 현재 메뉴에도 Discover와 Shorts, 캐릭터 만들기가 있습니다. 탐색 화면만 비교하지 말고 카드의 제작 주체와 이용 범위를 읽으세요.", "실제 크리에이터와 연결된 모델은 해당 사람이 매번 직접 답한다는 뜻이 아닙니다. 선택한 캐릭터가 창작된 가상 인물인지, 권리가 확인된 실제 사람 기반 페르소나인지 나누어 보세요."]],
        ["설정과 대화의 지속성", ["Candy AI는 외모와 목소리, 성격을 고르는 제작 흐름을 설명합니다. Swipey의 Custom AI도 비공개로 만들 수 있지만 공식 FAQ는 그 캐릭터와의 채팅에 Premium이 필요하다고 합니다. 무료 제작이라는 문구를 장기 무료 이용으로 해석하지 마세요.", "두 서비스에 똑같은 가상 주말 약속을 넣고 다른 화제를 거친 뒤 다시 물어보세요. 저희가 기억력 시험을 실시한 것은 아니므로 어느 쪽이 더 잘 기억한다고 단정하지 않습니다."]],
        ["목소리·사진·영상의 실제 이용료", ["두 서비스가 멀티미디어를 제공하더라도 사용량, 영상 길이, 재시도와 실패한 생성의 청구는 플랜에 따라 달라집니다. Swipey 쪽은 Premium, Hearts, 필요한 Fan Club을 나누어 적습니다.", "Candy AI 쪽도 현재 구독과 토큰 조건을 확인해 같은 일주일치 대화, 이미지, 통화를 계산하세요. 첫 화면 할인율이 아니라 완성된 결과 하나의 비용이 비교에 유용합니다."]],
        ["개인정보와 권리", ["비공개 캐릭터도 채팅과 이용 기록이 서비스에 남을 수 있습니다. 각 회사의 개인정보 문서에서 보관·삭제 절차를 읽고 실명이나 건강 정보를 넣지 마세요.", "실제 사람의 얼굴과 목소리를 무단으로 흉내 내지 않는 것은 양쪽 모두에서 중요합니다. 예쁜 홍보 이미지와 대화 품질은 별개의 항목입니다."]]
      ],
      test: "동일한 가상 캐릭터로 탐색 시간, 여섯 번 대화한 뒤 약속을 유지하는지, 이미지 두 장과 짧은 음성 이용의 실제 비용을 기록하고 결제 화면에서 다시 확인하세요.",
      verdict: "검증된 크리에이터와 Fan Club을 포함한 발견 경험이 중요하면 Swipey AI를 더 살펴보세요. 안내에 따른 개별 캐릭터 설정이 우선이면 Candy AI도 좋은 비교 대상입니다. 둘 다 발견과 멀티미디어가 있으므로 기능 유무만으로 결론 내리지 마세요."
    },
    "crushon-ai": {
      title: "Swipey AI vs CrushOn AI: 캐릭터 출처, 모델 제어, 기억",
      description: "Swipey AI의 피드와 세 캐릭터 유형을 CrushOn AI의 커뮤니티 캐릭터·모델 제작·저장 기억 기능과 대조합니다.",
      intro: "Swipey AI는 영상과 이미지가 이어지는 Feed에서 플랫폼, 크리에이터, 직접 만든 인물로 들어갑니다. CrushOn AI는 커뮤니티 캐릭터와 모델 설정을 더 자세히 살피는 편이 중요합니다. 캐릭터 수가 많다는 사실만으로 원하는 대화가 보장되지는 않습니다.",
      sections: [
        ["발견과 공개 범위", ["Swipey에서는 짧은 콘텐츠를 보다가 채팅으로 이동합니다. CrushOn의 공개 캐릭터라면 첫 대사, 작성자의 설명, 태그를 읽어 장면과 행동 범위를 파악해야 합니다. 비공개 제작물과 공개 카드의 권리도 다릅니다.", "실제 인물의 사진을 사용한 듯한 프로필은 출처와 동의를 확인하세요. 크리에이터 페르소나를 인간과의 직접 대화로 오해하지 않는 것도 중요합니다."]],
        ["모델과 기억을 분리하기", ["CrushOn 공식 Wiki는 기본 모델, 버전, 프롬프트를 선택해 모델을 만드는 과정을 설명하고 저장된 Memory를 보는 문서도 제공합니다. Swipey의 관계 단계와 기억 홍보가 동일한 데이터 구조를 뜻하지는 않습니다.", "가상 약속을 제시하고 주제를 바꿨다가 돌아오세요. 현재 대화창이 참고하는 맥락과 세션 밖에 저장된 기억을 나눠 평가해야 실제 차이가 보입니다."]],
        ["미디어와 이용량", ["Swipey는 전화, 이미지, 영상, Hearts, Fan Club을 명시합니다. CrushOn을 쓰려는 이유가 장문의 글 역할극과 모델 선택이라면 안 쓰는 영상 기능에 비용을 지불할 이유는 줄어듭니다.", "일주일치 메시지, 선택 모델, 이미지나 통화의 필요 여부를 정한 뒤 현재 요금표를 비교하세요. 무료 메시지 수나 고정 가격은 바뀔 수 있어 이 글에서 확정하지 않습니다."]],
        ["저장과 재사용의 책임", ["공개 캐릭터를 쓰는 것과 내 대화가 공개된다는 것은 다릅니다. 설정과 기록의 공개 여부, 삭제 방법을 각각 확인하세요.", "모델이나 인물을 만들 때 다른 사람의 얼굴, 목소리, 글을 허락 없이 복제하지 말고 성인 가상 인물로 시험하세요."]]
      ],
      test: "같은 짧은 성인 가상 인물을 각각 설정해 여섯 턴 뒤의 회상, 새 세션의 저장 기억, 공개 범위, 선택 모델과 실제 결제 조건을 표로 남기세요.",
      verdict: "Feed와 음성·영상, 크리에이터 층까지 필요한 사람에게는 Swipey AI가 맞을 수 있습니다. 모델 프롬프트와 커뮤니티 역할극을 세밀하게 다루려면 CrushOn AI가 비교 대상입니다. 대화 품질은 같은 장면으로 직접 확인해야 합니다."
    },
    "ourdream-ai": {
      title: "Swipey AI vs OurDream AI: 두 피드와 캐릭터·이미지 제작",
      description: "OurDream에도 Feed가 있다는 사실을 바탕으로 캐릭터 설정, 역할극, 이미지·영상, DreamCoins와 Swipey의 Premium·Hearts를 비교합니다.",
      intro: "OurDream AI도 Explore, Feed, Community 메뉴를 운영합니다. Swipey는 피드이고 OurDream은 제작만 한다는 구분은 사실과 다릅니다. 둘 다 발견 기능을 살핀 다음, Swipey의 검증된 크리에이터와 OurDream의 캐릭터 외모·성격·목소리 설정을 따로 비교해야 합니다.",
      sections: [
        ["발견에서 제작까지", ["Swipey Explorer Feed는 짧은 영상, 이미지, 카드에서 대화로 이어집니다. OurDream은 현재 사이트에서 Explore, Feed, Create, Generate를 함께 안내합니다. 마음에 드는 캐릭터를 찾고 수정 화면까지 가는 과정을 각각 기록하세요.", "피드의 크기나 홍보용 카드 수가 아니라 원하는 캐릭터까지 걸린 시간, 설명의 충실도와 저장한 캐릭터로 다시 돌아오는 편의성이 중요합니다."]],
        ["외형과 대화 일관성", ["OurDream은 외형, 성격, 목소리 설정과 대화·이미지 생성을 강조합니다. Swipey Custom AI도 꾸밀 수 있지만 그 인물과의 채팅 접근 조건은 별도입니다.", "같은 가상 인물을 안전한 서로 다른 두 장소에서 생성하고 얼굴 특징이 이어지는지 봅니다. 이미지의 아름다움과 대화 기억을 한 점수로 섞으면 어느 과정이 문제인지 알기 어렵습니다."]],
        ["서로 다른 결제 단위", ["OurDream은 유료 플랜과 DreamCoins를 설명합니다. Swipey는 Premium, Hearts, Fan Club 조건이 나뉩니다. 현재 결제 화면에서 동일한 이미지·영상·통화 사용량에 필요한 금액을 계산하세요.", "생성 실패와 다시 시도할 때의 청구, 저장된 결과물의 권리, 이미지를 영상에 이용하는 조건도 확인하세요. 무제한이라는 홍보어를 모든 형식에 적용하면 안 됩니다."]],
        ["실제 사람의 권리", ["동의 없는 사람의 얼굴이나 목소리를 입력하지 말고 명백한 성인 가상 캐릭터로 시험하세요. 공개 기능이 있다면 라이선스와 삭제 방법도 읽어야 합니다.", "이 글은 두 서비스의 실제 이미지 품질을 측정한 순위표가 아닙니다. 공식 설명을 기반으로 독자가 반복 가능한 방법을 제시합니다."]]
      ],
      test: "두 제품에서 같은 가상 캐릭터를 만들고 피드에서 제작 화면까지의 단계, 안전한 이미지 두 장의 외형 일치, 짧은 영상 조건과 전체 비용을 비교하세요.",
      verdict: "검증된 크리에이터 및 Fan Club 경험을 쓰려면 Swipey AI를, 외형·역할극·이미지 제작을 중심에 둘 생각이라면 OurDream AI를 함께 검토하세요. 두 서비스 모두 피드가 있으므로 그 유무만으로 선택할 수 없습니다."
    },
    girlfriendgpt: {
      title: "Swipey AI vs GirlfriendGPT: 크리에이터 모델과 공개 캐릭터",
      description: "Swipey AI의 Platform·Verified Creator·Custom AI와 GirlfriendGPT의 캐릭터 탐색, 직접 제작, 이미지 기능을 비교합니다.",
      intro: "두 서비스 모두 남이 만든 인물을 찾거나 자신의 인물을 만드는 입구가 있습니다. Swipey의 Verified Creator Model은 참여한 실제 크리에이터와 연결되고 Fan Club이 별도 선택 기준입니다. GirlfriendGPT의 공개 캐릭터 카드와 직접 만드는 화면은 다른 방식으로 평가해야 합니다.",
      sections: [
        ["제작자와 출처", ["Swipey 공식 FAQ는 플랫폼, 검증된 크리에이터, 개인 Custom AI를 구분합니다. GirlfriendGPT에서는 공개 카드의 설명을 읽거나 직접 성인 가상 인물을 설정합니다. 카드가 멋지다는 이유로 사용권과 공개 범위를 건너뛰지 마세요.", "실제 크리에이터의 AI 페르소나는 그 사람이 모든 답장을 직접 쓴다는 뜻이 아닙니다. 커뮤니티에 공개된 이미지도 아무나 다른 서비스에서 재사용할 수 있는 자료는 아닙니다."]],
        ["채팅과 이미지의 다른 평가", ["두 곳에 같은 가상 장면을 넣고 첫 인사, 여섯 턴 뒤의 설정 유지, 대화를 스스로 이어 가는지를 봅니다. 이미지는 별도로 두 장을 생성해 인물의 얼굴과 분위기가 유지되는지 기록하세요.", "GirlfriendGPT 공식 제작 화면에 설정 항목이 있다는 사실이 항상 좋은 결과를 보장하지는 않습니다. 이 사이트는 실제 생성 성공률을 측정하지 않았습니다."]],
        ["요금 구조", ["Swipey에서는 Premium, Hearts, Fan Club이 각각 어떤 행동에 필요한지 적습니다. GirlfriendGPT에서는 무료 시작, 구독·크레딧, 이미지 사용 조건을 현재 약관과 결제 화면에서 확인해야 합니다.", "오래된 비교 글의 고정 가격을 가져오지 말고 대화, 이미지, 필요하다면 통화·영상까지 포함한 일주일 비용을 계산하세요. 크리에이터 멤버십도 빠뜨리지 마세요."]],
        ["비공개 설정과 권리", ["비공개 인물이라고 해도 서비스의 데이터 처리가 없다는 뜻은 아닙니다. 개인정보를 설정에 쓰지 말고 대화 보관과 계정 종료 절차를 비교하세요.", "실제 사람의 얼굴이나 음성을 흉내 내는 제작은 명확한 허락이 필요합니다. 공개 캐릭터 카드도 무단 복제하지 않는 편이 안전합니다."]]
      ],
      test: "동일한 성인 가상 인물을 만들어 대화 첫머리, 화제 전환 뒤 회상, 이미지 두 장, 공개 범위와 일주일 결제액을 기록하세요. 각 인물의 소재 출처도 살펴보세요.",
      verdict: "크리에이터와 연결된 AI 페르소나 및 Fan Club이 중요하면 Swipey AI를, 공개 인물 탐색과 직접 제작·이미지 도구가 주된 목표면 GirlfriendGPT를 비교하세요. 어느 쪽이든 권리와 비용을 확인해야 합니다."
    },
    lovescape: {
      title: "Swipey AI vs Lovescape: 캐릭터 발견과 연결된 창작 흐름",
      description: "Swipey AI의 Feed·크리에이터 층과 Lovescape의 채팅·이야기·이미지·영상이 이어지는 제작 도구를 비교합니다.",
      intro: "Lovescape의 현재 공식 설명은 성인 가상 인물의 대화, 이야기, 이미지, 영상을 한 설정으로 연결하는 제작 흐름을 강조합니다. 단순한 관계 단계 앱으로만 설명하면 핵심을 놓칩니다. Swipey의 빠른 발견과 Fan Club이 필요한지, 아니면 한 장면을 여러 형식으로 발전시키려는지부터 따져 보세요.",
      sections: [
        ["피드와 프롬프트 중 출발점", ["Swipey에서는 짧은 영상·이미지·카드에서 인물을 발견하고 채팅으로 갑니다. Lovescape는 외형과 장면, 이야기를 지정해 채팅이나 이미지 제작으로 넘어가는 작업을 전면에 둡니다.", "두 서비스 모두 이미지와 영상이 있으므로 기능 존재 여부만으로는 부족합니다. 원하는 인물을 발견하는 시간과 하나의 아이디어를 구현하는 시간을 나눠 측정하세요."]],
        ["같은 설정을 형식 사이로 옮기기", ["Lovescape는 대화로 장면을 잡고 그 내용을 이야기, 이미지, 영상 프롬프트로 연결한다고 설명합니다. Swipey는 한 인물과의 대화·통화·이미지·영상을 안내하지만 플랫폼 인물인지 크리에이터 인물인지에 따라 접근이 달라집니다.", "안전한 가상 장면 하나를 정해 글, 이미지, 영상에 걸쳐 인물의 특징이 이어지는지 살펴보세요. 홍보에서 말하는 일관성을 보장된 성공률로 받아들이면 안 됩니다."]],
        ["비용과 출력물 권리", ["Swipey의 Premium, Hearts, Fan Club을 따로 계산하고 Lovescape에서는 현재 이미지·영상 생성 조건, 실패 후 재시도, 저장과 삭제, 출력물 사용권을 확인합니다.", "이미지 한 장과 짧은 영상 하나가 실제 완성될 때까지 드는 비용이 입구의 월 가격보다 중요합니다. 저희는 두 제품의 생성 성공률을 직접 측정하지 않았습니다."]],
        ["성인과 동의의 경계", ["Lovescape 공식 페이지는 가상의 성인과 직접 만들었거나 사용 허락이 있는 자료를 요구합니다. Swipey에서 크리에이터 인물이나 자작 모델을 다룰 때도 실제 사람의 얼굴과 음성 권리를 무시할 수 없습니다.", "미성년자로 보이는 인물이나 동의 없는 실존 인물을 사용하지 말고 개인정보와 삭제 조건을 읽으세요. 이 사이트 자체는 노골적인 콘텐츠를 만들거나 게시하지 않습니다."]]
      ],
      test: "같은 성인 가상 인물과 비노골적인 장면으로 발견부터 결과까지의 단계, 이미지 두 장과 짧은 영상의 일관성, 총비용, 삭제 방법을 기록하세요.",
      verdict: "빠른 발견과 검증된 크리에이터의 Fan Club이 목표라면 Swipey AI, 한 구상을 채팅·이야기·이미지·영상으로 확장하려면 Lovescape의 제작 흐름을 비교하세요. 실제 출력과 최신 조건으로 결정해야 합니다."
    }
  },
  "zh-hant": {
    "candy-ai": {
      title: "Swipey AI vs Candy AI：角色探索、建立與每週花費",
      description: "比較兩者的 Feed/Discover、角色來源、聊天、語音、圖片、影片、訂閱與額外付費，不以舊價格判斷優劣。",
      intro: "Candy AI 目前也有 Discover 和 Shorts；兩邊都提供角色建立與多媒體互動。因此不能說只有 Swipey AI 有動態牆或影片。更有用的問題是：Swipey 的平台、創作者與私人角色三條路，是否比 Candy 的角色探索和建立方式更符合你的日常使用？",
      sections: [
        ["角色卡片背後是誰", ["Swipey 的 Explorer Feed 可能顯示平台製作的角色，也會顯示連結真實創作者的 AI 分身；Candy AI 的現行首頁則列出 Discover、Shorts、Create Character 等入口。比較時要看卡片來源和互動對象，不只是誰的封面更吸引人。", "創作者相關 AI 角色不代表本人逐句回覆。對角色照片、聲音或專屬內容有期待時，應先核對標示與權利，而不是依商品名稱自行推斷。"]],
        ["建立角色後是否能持續聊", ["Candy AI 說明可設定外觀、聲音與個性。Swipey 可以製作私人 Custom AI，但官方 FAQ 指與該自建角色聊天需要 Premium。免費建立與免費長期互動不能畫上等號。", "用同一段虛構成人角色的週末約定，在兩邊聊幾回合，改變話題後再回來。本站並未測量兩個產品的記憶表現，因此不把官方的「記得你」宣傳寫成比較結果。"]],
        ["多媒體功能如何收費", ["兩者都宣傳聲音、圖片和影片，但能用的功能、生成次數、影片長度及失敗重試條件可能與方案有關。Swipey 的 Premium、Hearts 和可能需要的 Fan Club 應拆開計算。", "Candy AI 的當前訂閱與 token 條件也要放進同一份一週使用清單。首購折扣與『支援影片』的圖示，不會告訴你完成一段可用影片的實際成本。"]],
        ["資料與人物權利", ["私人角色不等於服務完全不處理聊天內容。閱讀兩者的隱私文件，確認資料保留、關閉帳號和刪除方式。別把真實住址或健康資訊放進測試對話。", "也不要未經授權模仿他人的臉或聲音。角色的外觀品質和聊天品質是兩項不同的評分，不能用宣傳照代替長期體驗。"]]
      ],
      test: "使用同一位虛構成人角色，記錄找到合適人物的時間、六輪後是否保持約定、兩張圖片與一次短語音互動的費用，再用當前結帳頁確認。",
      verdict: "如果需要驗證創作者及 Fan Club 的探索層，Swipey AI 值得深入看；若偏好按步驟設定一位伴侶，也應比較 Candy AI。兩者均有探索與多媒體功能，關鍵是你使用時的持續費用與角色來源。"
    },
    "crushon-ai": {
      title: "Swipey AI vs CrushOn AI：角色來源、模型控制和記憶",
      description: "以角色公開範圍、模型提示、儲存記憶、長聊成本及多媒體使用，檢視 Swipey AI 與 CrushOn AI 的取捨。",
      intro: "Swipey AI 把短片與圖片動態牆連到三種角色來源。CrushOn AI 的社群角色和模型建立選項，則值得從作者說明與對話設定讀起。兩個產品都不能只靠角色數量判斷是否適合長期角色扮演。",
      sections: [
        ["探索角色與檢查公開性", ["Swipey 的 Feed 讓人從視覺內容進入聊天；CrushOn 的公開角色需要仔細閱讀開場、作者設定和標籤。平台製作、社群製作與創作者連結的 AI 分身，涉及不同的權利與期待。", "公開的角色卡不代表你自己的聊天也會公開，但兩者的權限都應查明。看到疑似使用真實人物肖像的卡片時，先核對來源與同意。"]],
        ["模型選擇和記憶不是一回事", ["CrushOn 官方 Wiki 說明基礎模型、版本和自訂 prompt 的製作流程，另有檢視已儲存 Memory 的文件。Swipey 宣傳的關係進度與記憶，不能直接假設是相同的儲存機制。", "讓兩個虛構成人角色約定一件小事，轉換話題後再提起；若服務聲稱跨對話記得，也應另開會話測試。較長的上下文不保證人格和事件一定一致。"]],
        ["媒體廣度與真正需求", ["Swipey 的官方說明提及通話、圖片、影片、Hearts 與 Fan Club。若你的主要用途只是長篇文字角色扮演，是否真的需要付費使用影音功能，值得問清楚。", "對照目前方案，把每週訊息、所選模型、圖片與通話列為獨立項目。免費額度和單價會改變，不宜把舊截圖當成固定承諾。"]],
        ["角色素材與聊天資料", ["自己建立模型或人物時，不要拿未獲許可的照片、聲音或文字當素材。角色的公開設定與私人對話的留存是不同問題。", "兩邊都應查看刪除角色和聊天的實際方法。使用虛構資料測試，既能降低風險，也比較容易在相同條件下重試。"]]
      ],
      test: "在兩邊設定相同的短篇成人虛構角色，記錄六輪後的回想、另開對話時的記憶、公開狀態、模型選項和一週費用。",
      verdict: "偏好動態牆、語音影音及創作者內容的人，可重點比較 Swipey AI；希望自己調整模型 prompt 和社群角色互動的人，應深入看 CrushOn AI。對話品質仍須使用同一場景自行測試。"
    },
    "ourdream-ai": {
      title: "Swipey AI vs OurDream AI：兩種 Feed 與角色、影像創作",
      description: "OurDream AI 也有 Feed；進一步比較雙方角色設定、角色扮演、圖片影片製作及 Premium、Hearts、DreamCoins 的不同成本。",
      intro: "OurDream AI 官網列出 Explore、Feed、Community、Create 和 Generate。把它寫成『沒有動態牆、只會生圖』並不準確。比較的重點是：Swipey 的三種角色來源及創作者層，和 OurDream 的外觀、個性、聲音設定如何連到聊天及生成。",
      sections: [
        ["從發現走到建立", ["Swipey Explorer Feed 以短片、圖片和角色卡引導使用者開始聊天。OurDream 也提供探索和動態牆，再通往建立與生成工具。實際比較兩邊找到合適角色、調整設定並回到已儲存人物所需的步驟。", "角色卡多寡不能代替發現效率。記錄找到符合需求的人物要多久、說明是否清楚，以及修改後是否容易維持原本設定。"]],
        ["外觀與對話需分開評分", ["OurDream 官方描述可設定角色外觀、個性和聲音，並進行對話與圖片生成。Swipey Custom AI 也可自訂，但跟自建人物聊天的方案條件需另外核對。", "在同一位虛構成人角色身上，只更換非露骨場景的背景和服裝，生成兩次看臉部與風格是否延續。聊天中的記憶和圖像的一致性應分開記錄。"]],
        ["DreamCoins 與 Hearts", ["OurDream 的現行說明包含訂閱與 DreamCoins；Swipey 有 Premium、Hearts、Fan Club。不要把不同平台的代幣名稱當成相同價值，應以完成相同數量的圖片、影片和通話所需的當前金額比較。", "查明生成失敗、重新嘗試、圖片轉影片、儲存與輸出的實際限制。「無限制」宣傳不一定涵蓋每種媒體與所有模型。"]],
        ["素材權利與公開", ["創作測試只用清楚成年的虛構人物，不匯入沒有授權的真人照片或聲音。若會把人物公開給社群，也要確認素材使用權與刪除方法。", "本站沒有實際測量兩者的圖片品質或成功率；這篇文章整理官方功能並給出讀者能重複的測法。"]]
      ],
      test: "在兩邊建立同一位虛構角色，記錄 Feed 到角色編輯的操作、兩張安全圖片的人物一致性、短影片的製作條件及總費用。",
      verdict: "對驗證創作者及 Fan Club 有需求，可先檢查 Swipey AI；若重點是外觀、角色扮演和生成流程，OurDream AI 是重要對照。兩者都有 Feed，不能以此作唯一分界。"
    },
    girlfriendgpt: {
      title: "Swipey AI vs GirlfriendGPT：創作者 AI 與社群角色卡",
      description: "分清 Swipey AI 三種角色與 GirlfriendGPT 的角色探索、自建及圖片工具，再比較聊天、人物權利和費用。",
      intro: "兩邊都可瀏覽人物或自行建立角色。不過 Swipey 的 Verified Creator Model 與參與的真人創作者相關，也牽涉 Fan Club。GirlfriendGPT 的社群人物卡及自建、圖片製作入口應分開看，而非只比誰的封面較吸引人。",
      sections: [
        ["角色是誰建立的", ["Swipey 官方 FAQ 區分 Platform、Verified Creator、Custom AI。GirlfriendGPT 可探索他人公開的人物卡，也能自行設定虛構人物。讀取人物的作者、說明、公開範圍和圖片來源。", "與真實創作者相關的 AI 分身不等於本人逐則回覆；一張公開卡片也不代表它的素材可任意重用。權利與標示是選擇的一部分。"]],
        ["文字與圖片各自檢查", ["給兩邊相同的虛構情境，比較開場、六輪後是否保持設定，以及角色能否主動推進故事。再各做兩張安全圖片，觀察人物外貌能否保持一致。", "GirlfriendGPT 的官方製作畫面有多種設定，但選項多並不能證明每次輸出品質。本站沒有進行真實的速度或成功率測量。"]],
        ["方案與代幣", ["Swipey 需區分 Premium、Hearts、Fan Club 的作用。GirlfriendGPT 則需從現行條款和付款頁查免費入口、訂閱、訊息點數及圖片生成限制。", "用一週預期的訊息、圖片、影音活動計算總額，不照搬舊文章的價格。若要加入創作者會員，也把它列入費用。"]],
        ["隱私和形象權", ["私人角色仍可能涉及服務對聊天和使用資料的處理。不要把住址、健康資訊或第三人的秘密寫進人物設定，並了解關閉帳號後如何處理資料。", "若要仿製真實人物的臉或聲音，必須有清楚授權。社群卡片上的素材也不要直接複製到另一個平台。"]]
      ],
      test: "在兩個產品用同一位成人虛構人物，記錄開場、轉換話題後的回想、兩張圖片、公開狀態和一週實際成本，並查明素材來源。",
      verdict: "若想使用與真實創作者連結的 AI 分身與 Fan Club，Swipey AI 的設定較值得研究；若重點是社群角色探索和自建、圖片工具，也應比較 GirlfriendGPT。最終要以權利、費用和自己重複測試的結果決定。"
    },
    lovescape: {
      title: "Swipey AI vs Lovescape：動態牆探索或連貫創作工作室",
      description: "比較 Swipey AI 的 Feed、創作者層，與 Lovescape 從聊天到故事、圖片及影片的一體化成人虛構角色創作流程。",
      intro: "Lovescape 的現行官網強調把成人虛構人物的聊天、故事、圖片和影片連在同一個設定裡。只把它稱為「關係進度」產品，會漏掉其實際定位。對照 Swipey 的 Feed 和創作者 Fan Club，可看出自己要的是快速找到人物，還是把一個構想拓展到不同格式。",
      sections: [
        ["從滑動或 prompt 開始", ["Swipey Explorer Feed 讓人從短片、圖片和人物卡進入互動。Lovescape 則鼓勵先設定外觀、場景與敘事方向，再以聊天或圖像生成開始。", "兩者都有圖片和影片，所以不能只列功能勾選表。記錄找到想要的角色所花時間，以及完成一個構想需多少步驟。"]],
        ["同一人物跨格式", ["Lovescape 官方頁面提出以聊天確定情境，再延伸為故事、圖片和影片 prompt。Swipey 也連結同一角色的聊天、通話及媒體，但使用權限可能因平台人物、創作者人物或自建人物而不同。", "以一段安全、非露骨的成人虛構情境檢查人物的臉、口吻、場景是否在文字和影像間維持。不要把宣傳中的一致性理解成必然成功。"]],
        ["輸出成本和使用權", ["Swipey 的 Premium、Hearts、Fan Club 需分項計算。Lovescape 應檢查目前的圖片和影片生成條件、失敗重試、儲存與刪除，以及輸出檔案的使用權。", "完成一張可用圖片和一段短影片的實際總成本，比首頁顯示的月費更有用。本站沒有實測兩者的生成品質或成功率。"]],
        ["成人同意與肖像", ["Lovescape 官方頁面要求使用虛構成年人，以及自己創作或取得許可的素材。Swipey 的創作者角色和自建人物同樣涉及真人臉孔、聲音的同意與權利。", "不製作未成年或年齡不明人物，不使用未經同意的真人素材；也要核對資料保留與刪除方式。本站本身不生成或展示露骨內容。"]]
      ],
      test: "使用相同的成人虛構人物與安全情境，記錄角色發現到成品的步驟、兩張圖片與短影片的一致性、總花費和刪除方法。",
      verdict: "若要快速探索角色並使用驗證創作者的 Fan Club，可研究 Swipey AI；若要讓一個構想連續產生聊天、故事、圖片與影片，則比較 Lovescape 的工作流程。仍須以當前條款與自己的非露骨測試作判斷。"
    }
  },
  es: {
    "candy-ai": {
      title: "Swipey AI vs Candy AI: descubrimiento, personajes y gasto real",
      description: "Compara los feeds, la creación de compañeros, chat, voz, imágenes, vídeo y costes adicionales de Swipey AI y Candy AI sin asumir precios permanentes.",
      intro: "Candy AI también ofrece Discover y Shorts, además de creación de personajes y medios visuales. Por tanto, no es correcto presentar a Swipey AI como el único producto con feed ni a Candy como un chat solo de texto. La diferencia que merece estudio es el origen de los personajes de Swipey, incluida la capa de creadoras verificadas, frente al recorrido concreto de Candy.",
      sections: [
        ["Quién creó el personaje que aparece", ["Explorer Feed de Swipey reúne figuras seleccionadas por la plataforma y personas de IA vinculadas a creadoras verificadas. La web actual de Candy también muestra Discover, Shorts y Create Character. Compara la información de cada ficha y sus permisos, no solo la foto de portada.", "Un avatar asociado a una creadora no significa que ella responda manualmente cada mensaje. Comprueba qué parte es generada por IA, qué contenido procede de una persona real y qué compra desbloquea cada elemento."]],
        ["Crear no es lo mismo que conversar indefinidamente", ["Candy explica ajustes de apariencia, voz y personalidad. Swipey permite diseñar un Custom AI privado, pero su FAQ oficial exige Premium para hablar con él. Un botón de creación gratuita no describe por sí mismo el coste de uso continuado.", "Escribe la misma escena ficticia de adultos en ambas plataformas: establece un plan, cambia de tema y vuelve a él. Este sitio no ha medido la memoria de los productos y no atribuye una victoria empírica a ninguno."]],
        ["Voz, imágenes y vídeo por semana", ["Ambos proveedores anuncian varios formatos. Lo que puede variar es cuánto se incluye, qué consume créditos o Hearts, la duración del vídeo y cómo se cobran los intentos fallidos. En Swipey separa Premium, Hearts y cualquier Fan Club necesario.", "En Candy revisa la suscripción y los tokens actuales. Calcula un mismo patrón de siete días con chat, dos imágenes y una interacción de voz, no el descuento mostrado durante el registro."]],
        ["Privacidad y derechos de imagen", ["Que un personaje sea privado para otros usuarios no implica que la plataforma no trate mensajes y datos técnicos. Lee las políticas de ambos servicios y verifica retención, borrado y cierre de cuenta.", "No reproduzcas el rostro o la voz de una persona real sin autorización. El aspecto promocional de una figura no demuestra la coherencia de su conversación ni la calidad de cada generación posterior."]]
      ],
      test: "Con el mismo personaje adulto ficticio, registra tiempo de búsqueda, continuidad tras seis turnos, coste de dos imágenes y una breve interacción de voz. Confirma cada cifra en las pantallas de pago vigentes.",
      verdict: "Swipey AI merece atención si necesitas la relación entre feed, creadoras verificadas y Fan Club. Candy AI es una alternativa si prefieres su ruta de configuración y conversación individual. Ambos tienen descubrimiento y multimedia: decide por el trabajo y el presupuesto que realmente repetirás."
    },
    "crushon-ai": {
      title: "Swipey AI vs CrushOn AI: catálogo, modelos y memoria",
      description: "Contrasta el feed y los tres orígenes de personajes de Swipey AI con los personajes comunitarios, modelos personalizables y memoria de CrushOn AI.",
      intro: "Swipey parte de imágenes y clips para llegar a Platform Models, Verified Creator Models y Custom AI. En CrushOn AI conviene leer la ficha comunitaria y las opciones de modelo antes de iniciar una historia. Un catálogo abundante no garantiza que el personaje entienda o mantenga tu escena.",
      sections: [
        ["Descubrir y comprobar procedencia", ["El feed de Swipey favorece la exploración visual y el salto al chat. En CrushOn, examina saludo, etiquetas y notas de la persona que creó el personaje público. Un perfil de creadora real, uno ficticio de comunidad y tu personaje privado plantean expectativas distintas.", "La publicación de una ficha no autoriza a copiarla ni significa que tus conversaciones sean públicas. Revisa por separado visibilidad del personaje, derechos de las imágenes y privacidad del historial."]],
        ["Modelo, contexto y memoria guardada", ["La wiki oficial de CrushOn describe cómo elegir un modelo base, una versión y un prompt, además de una función para consultar Memory. No supongas que eso equivale a las menciones de progresión y recuerdo de Swipey; podrían referirse a mecanismos diferentes.", "Plantea una promesa ficticia y retómala después de varios intercambios. Si se anuncia memoria persistente, repite en otra conversación. Una ventana de contexto mayor tampoco asegura una personalidad coherente."]],
        ["Formatos que sí usarás", ["Swipey anuncia llamadas, imágenes, vídeo, Hearts y Fan Club. Si buscas principalmente narrativa escrita con control del modelo, esos extras no necesariamente aportan valor. En CrushOn el modelo elegido y el volumen de diálogo pueden influir más en tu decisión.", "Presupuesta mensajes, versión del modelo y los formatos que de verdad usarás durante una semana. Evita convertir los límites de un plan actual en una promesa permanente."]],
        ["Responsabilidad de quien crea", ["Antes de publicar un personaje o modelo, comprueba qué datos quedan visibles y cómo se elimina. No uses fotos, voz o textos ajenos sin derecho suficiente.", "Para comparar ambos productos, las escenas con personas adultas ficticias y sin datos privados son más seguras y permiten repetir el ensayo sin exponer a terceros."]]
      ],
      test: "Crea un personaje ficticio comparable en ambos servicios y anota recuerdo tras seis turnos y en una sesión nueva, controles de visibilidad, elección de modelo y coste semanal.",
      verdict: "Elige investigar Swipey AI si te interesan el descubrimiento visual y la mezcla de voz, vídeo y creadoras. Examina CrushOn AI si tu prioridad es ajustar modelos y jugar con personajes comunitarios. La calidad del diálogo requiere una prueba propia con la misma escena."
    },
    "ourdream-ai": {
      title: "Swipey AI vs OurDream AI: dos feeds y dos formas de crear",
      description: "OurDream AI también tiene Feed. Compara descubrimiento, personalización, rol, imágenes, vídeo y los costes de DreamCoins frente a Premium, Hearts y Fan Club.",
      intro: "La web de OurDream incluye Explore, Feed, Community, Create y Generate. No sería correcto decir que Swipey ofrece descubrimiento y OurDream solamente generación. La comparación empieza con los dos recorridos y sigue con el tipo de personaje: la capa de creadoras verificadas de Swipey frente a la personalización de apariencia, personalidad y voz que anuncia OurDream.",
      sections: [
        ["Del feed al editor", ["Swipey dirige desde clips, imágenes y fichas a la conversación. OurDream también combina exploración, comunidad, creación y generación. Mide los pasos necesarios para encontrar una figura, modificarla y recuperar tu proyecto más tarde.", "El número de tarjetas no basta: importan la claridad de la descripción, el tiempo hasta hallar algo útil y la facilidad para preservar tu configuración."]],
        ["Coherencia de imagen y de conversación", ["OurDream explica que se puede definir aspecto, personalidad y voz antes de chatear o generar imágenes. Swipey también permite crear Custom AI, aunque el acceso al chat de esa figura requiere consultar el plan actual.", "Mantén la misma identidad ficticia adulta y cambia solo el escenario o la ropa en dos imágenes no explícitas. Evalúa por separado la estabilidad visual y el recuerdo de una conversación; mezclarlos en una sola nota oculta los fallos."]],
        ["DreamCoins y Hearts no son equivalentes", ["OurDream anuncia planes y DreamCoins; Swipey distingue Premium, Hearts y Fan Club. Una unidad interna no vale lo mismo en ambos sistemas. Compara el importe necesario para acabar la misma secuencia de imágenes, vídeo y voz en los dos checkouts vigentes.", "Revisa si se cobra el resultado fallido, la regeneración o la conversión de imagen a vídeo, así como los derechos de uso y exportación. La palabra «ilimitado» no debe extenderse por suposición a todos los formatos."]],
        ["Derechos y publicación", ["Utiliza un personaje adulto claramente ficticio, sin cara ni voz de otra persona salvo que tengas permiso válido. Si publicas una creación, examina licencia, visibilidad y posibilidad real de borrarla.", "No afirmamos haber ensayado ni puntuado la calidad de las imágenes de ninguna plataforma. Las páginas oficiales justifican los puntos a comprobar, no un resultado garantizado."]]
      ],
      test: "Configura la misma figura adulta ficticia en ambos servicios; registra pasos desde Feed al editor, consistencia de dos imágenes seguras, condiciones de un vídeo breve y gasto total.",
      verdict: "Si la participación de creadoras verificadas y sus Fan Clubs es central, revisa Swipey AI. Si tu trabajo gira en torno a personalizar personajes, interpretar escenas y generar medios, compara OurDream AI. Los dos disponen de Feed, así que esa función no decide por sí sola."
    },
    girlfriendgpt: {
      title: "Swipey AI vs GirlfriendGPT: creadoras verificadas y fichas públicas",
      description: "Compara los tres orígenes de personajes de Swipey AI con la exploración, creación propia e imágenes de GirlfriendGPT, incluyendo derechos y costes.",
      intro: "Ambos permiten descubrir personajes o diseñar uno propio. En Swipey, Verified Creator Models conecta una persona de IA con una creadora real y puede añadir una decisión sobre Fan Club. GirlfriendGPT invita a examinar por separado sus fichas públicas, la creación de personajes y su herramienta visual.",
      sections: [
        ["Procedencia antes de apariencia", ["La FAQ de Swipey distingue Platform, Verified Creator y Custom AI. En GirlfriendGPT se puede explorar una ficha compartida o configurar un personaje. Antes de juzgar por la portada, mira autoría, visibilidad e información sobre derechos de la imagen.", "Una persona de IA relacionada con una creadora no equivale a un chat escrito por ella en tiempo real. Que una ficha comunitaria sea pública tampoco autoriza a reutilizar sus materiales fuera de la plataforma."]],
        ["Dos pruebas: conversación e imagen", ["Plantea la misma escena ficticia en los dos servicios y observa saludo, continuidad después de seis intercambios e iniciativa narrativa. Genera después dos imágenes no explícitas y anota si conservan rasgos del personaje.", "Que el creador oficial de GirlfriendGPT muestre opciones avanzadas no prueba automáticamente la calidad del resultado. No hemos medido tasas de éxito ni rapidez de generación."]],
        ["Suscripciones y créditos", ["Para Swipey enumera Premium, Hearts y el Fan Club que realmente necesitarías. En GirlfriendGPT consulta la entrada gratuita, suscripciones, créditos de mensajes y condiciones actuales de imagen en sus términos y pantalla de pago.", "Calcula una semana realista de chat, imágenes y, si procede, voz o vídeo. No traslades precios viejos de una reseña a una promesa actual; incluye también cualquier membresía de creadora."]],
        ["Privacidad y consentimiento", ["Un personaje privado para otros usuarios no implica ausencia de tratamiento de datos. Revisa retención de conversaciones, cierre de cuenta y controles de eliminación; evita incluir detalles personales reales.", "Para reproducir cara o voz de una persona se necesitan derechos y consentimiento claro. Tampoco copies sin permiso los retratos de fichas públicas."]]
      ],
      test: "Diseña la misma figura adulta ficticia en ambos productos y registra apertura del chat, recuerdo tras cambiar de tema, dos imágenes, visibilidad de la ficha y coste semanal; comprueba también el origen de los materiales.",
      verdict: "Si tu prioridad es un avatar vinculado a una creadora real y el acceso a Fan Club, estudia Swipey AI. Si prefieres recorrer personajes compartidos y crear uno con herramientas visuales, GirlfriendGPT merece comparación. Derechos y gasto importan tanto como la primera impresión."
    },
    lovescape: {
      title: "Swipey AI vs Lovescape: descubrir personajes o desarrollar una escena",
      description: "Contrasta el feed y las creadoras verificadas de Swipey AI con el flujo conectado de conversación, historias, imágenes y vídeos de Lovescape.",
      intro: "La página actual de Lovescape describe un taller para personajes adultos ficticios en el que un mismo concepto puede pasar por chat, historia, imagen y vídeo. Llamarlo solamente una aplicación de progreso de pareja sería impreciso. La comparación útil pregunta si valoras descubrir perfiles con rapidez o dirigir una producción en varios formatos.",
      sections: [
        ["Entrada por feed o por idea", ["Explorer Feed de Swipey lleva desde clips e imágenes a una ficha y una conversación. Lovescape destaca definir apariencia, escenario y tono narrativo antes de crear una imagen o iniciar un chat.", "Ambos tienen herramientas visuales, así que una lista de casillas marcadas aporta poco. Cronometra cuánto tardas en hallar una figura útil y cuánto en convertir una idea concreta en una primera salida."]],
        ["La misma identidad en varios formatos", ["Lovescape propone usar el chat para establecer contexto y trasladarlo a historia, imagen y vídeo. Swipey conecta conversación, voz y medios con sus figuras, pero las condiciones pueden depender de si el personaje es de plataforma, creadora o propio.", "Elige una escena adulta ficticia y no explícita. Comprueba que rasgos, voz narrativa y ambiente se mantengan al pasar de texto a imagen y vídeo; la promesa comercial de consistencia no equivale a una tasa de éxito demostrada."]],
        ["Coste por resultado y derechos", ["En Swipey separa Premium, Hearts y Fan Club. En Lovescape consulta las reglas actuales de generación de imágenes y vídeos, repetición tras un fallo, guardado, borrado y uso posterior de los resultados.", "El importe para terminar una imagen útil y un vídeo breve importa más que el número mensual de portada. Este sitio no ha probado tasas de éxito ni calidad visual de ninguna de las dos plataformas."]],
        ["Límite adulto y consentimiento", ["Lovescape dice que los personajes deben ser adultos ficticios y los materiales subidos deben ser propios o autorizados. Al crear en Swipey o usar perfiles ligados a creadoras también hay que respetar derechos de cara, voz e identidad.", "Evita sujetos menores o de edad ambigua, imitaciones no consentidas y datos privados. Este sitio editorial no genera ni muestra contenido explícito."]]
      ],
      test: "Con el mismo personaje adulto ficticio y una escena segura, registra pasos desde el descubrimiento hasta dos imágenes y un vídeo corto, coherencia, gasto total y forma de borrar el proyecto.",
      verdict: "Swipey AI resulta más relevante si quieres Explorer Feed y la capa de creadoras verificadas con Fan Club. Lovescape merece atención si buscas convertir una misma idea en conversación, historia, imagen y vídeo. Comprueba resultados reales y condiciones actuales antes de decidir."
    }
  },
  "pt-br": {
    "candy-ai": {
      title: "Swipey AI vs Candy AI: descoberta, criação e gasto na prática",
      description: "Compare feed, origem dos personagens, criação, chat, voz, imagens, vídeos e custos de Swipey AI e Candy AI sem congelar preços promocionais.",
      intro: "Candy AI também mostra Discover e Shorts e oferece criação de personagens e mídia. Não é correto dizer que só o Swipey tem feed ou que Candy se limita a texto. A pergunta relevante é se você precisa da divisão do Swipey entre modelos da plataforma, personas ligadas a criadoras verificadas e Custom AI, ou prefere o percurso de configuração do Candy.",
      sections: [
        ["Origem do perfil que você encontrou", ["O Explorer Feed do Swipey reúne personagens selecionados pelo serviço e personas de IA associadas a criadoras reais. A navegação atual do Candy também apresenta Discover, Shorts e Create Character. Observe quem criou cada perfil e a que conteúdo ele dá acesso, não apenas a capa.", "Uma persona vinculada a criadora não significa que a pessoa escreva todas as respostas ao vivo. Antes de pagar por conteúdo adicional, confira o que é gerado por IA e o que é fornecido pela pessoa."]],
        ["Criar um personagem e conversar com ele", ["Candy descreve ajustes de aparência, voz e personalidade. Swipey permite fazer um Custom AI privado, mas sua FAQ oficial informa que conversar com ele requer Premium. Não confunda criação gratuita com uso prolongado gratuito.", "Coloque nos dois serviços a mesma situação inventada entre adultos: uma promessa para o fim de semana, uma mudança de assunto e o retorno à promessa. Este site não mediu memória e não declara um vencedor experimental."]],
        ["Voz e mídia no orçamento semanal", ["Ambas as empresas divulgam interação em mais de um formato. Acesso, duração dos vídeos, consumo de créditos e tentativas frustradas podem mudar por plano. No Swipey, anote Premium, Hearts e o Fan Club que realmente seria necessário.", "No Candy, confira assinatura e tokens atuais. Use a mesma cesta de sete dias — mensagens, duas imagens e uma interação de voz — em vez de comparar apenas o desconto inicial."]],
        ["Privacidade e direitos", ["Uma figura privada para outros usuários não implica que a empresa deixe de processar conversas e dados técnicos. Leia as políticas das duas, inclusive retenção, exclusão e encerramento da conta.", "Não imite rosto ou voz de alguém sem autorização. A qualidade da foto de divulgação e a coerência de uma conversa longa são critérios diferentes."]]
      ],
      test: "Com a mesma figura adulta fictícia, registre tempo até encontrar um perfil adequado, continuidade após seis mensagens, preço de duas imagens e de uma interação curta de voz; confirme tudo nos checkouts atuais.",
      verdict: "Se o atrativo é a combinação de feed, criadoras verificadas e Fan Club, aprofunde o Swipey AI. Se o seu foco é configurar uma companhia individual por etapas, Candy AI é uma comparação importante. Ambos oferecem descoberta e mídia; escolha pelo uso que você repetirá e poderá pagar."
    },
    "crushon-ai": {
      title: "Swipey AI vs CrushOn AI: personagens, modelos e memória",
      description: "O feed e as três origens de personagens do Swipey AI frente ao catálogo comunitário, criação de modelos e memória visível do CrushOn AI.",
      intro: "Swipey leva de imagens e clipes a modelos da plataforma, criadoras verificadas ou Custom AI. No CrushOn AI, o contexto de personagens da comunidade e os ajustes de modelo pedem outra leitura. Ter muitos perfis não garante que qualquer um mantenha sua história por mais tempo.",
      sections: [
        ["Da descoberta à autoria", ["O Explorer Feed privilegia uma decisão visual rápida. No CrushOn, leia saudação, tags e descrição do autor de um personagem público. Um perfil criado por outra pessoa, uma persona de criadora e seu personagem privado não trazem as mesmas permissões.", "O fato de uma ficha ser pública não significa que suas conversas também sejam. Confirme separadamente visibilidade, direitos das imagens e privacidade do histórico."]],
        ["Modelo e memória são camadas diferentes", ["A wiki oficial do CrushOn explica escolha de modelo base, versão e prompt personalizado, além de uma página para visualizar Memory. Não equipare automaticamente isso à progressão de relacionamento e às alegações de memória do Swipey.", "Introduza uma promessa fictícia, passe a outro assunto e retorne. Se houver memória entre sessões, teste também em um novo chat. Uma janela de contexto grande pode continuar produzindo contradições."]],
        ["Use só os formatos que importam", ["Swipey anuncia chamadas, imagens, vídeo, Hearts e Fan Club. Para quem deseja principalmente interpretação por texto com controle de modelo, pagar por várias modalidades pode não trazer benefício. No CrushOn, modelo escolhido e volume de mensagens podem ser mais relevantes.", "Defina uma semana com mensagens, modelo, imagens e voz apenas se você usará cada parte. Verifique limites atuais em vez de repetir quantidade de mensagens gratuitas publicada em uma data antiga."]],
        ["Quem cria também assume responsabilidades", ["Ao publicar um personagem ou modelo, veja o que ficará visível e como removê-lo. Não incorpore fotos, vozes nem textos de terceiros sem permissão suficiente.", "Uma cena com adultos inventados e sem informações privadas reduz riscos e torna o teste mais fácil de repetir nos dois serviços."]]
      ],
      test: "Crie uma figura fictícia curta nos dois produtos e anote lembrança após seis turnos e em outra sessão, controles de publicação, versão de modelo e custo para a semana planejada.",
      verdict: "Swipey AI pode fazer sentido para quem busca feed e combinação de chamadas, vídeos e criadoras. CrushOn AI merece mais atenção para controlar modelos e jogar com personagens comunitários. A qualidade do diálogo só pode ser comparada usando a mesma cena."
    },
    "ourdream-ai": {
      title: "Swipey AI vs OurDream AI: dois feeds e criação de personagens",
      description: "OurDream AI também tem Feed. Compare descoberta, customização, interpretação, imagens e vídeo, além de DreamCoins versus Premium, Hearts e Fan Club.",
      intro: "O site atual do OurDream lista Explore, Feed, Community, Create e Generate. Portanto, seria errado opor o feed do Swipey a um OurDream sem descoberta. Depois de olhar os dois percursos, compare a origem de personagens do Swipey, inclusive criadoras verificadas, com a ênfase do OurDream em aparência, personalidade, voz e criação.",
      sections: [
        ["Do perfil ao editor", ["No Swipey, clipes, imagens e cartões do Explorer Feed levam ao chat. OurDream também combina exploração, comunidade, criação e geração. Conte as etapas para encontrar uma figura, alterar seus detalhes e voltar a ela depois.", "O número de perfis não mede sozinho a utilidade da busca. Importam a clareza da descrição, o tempo até achar alguém adequado e a facilidade para preservar as escolhas feitas."]],
        ["Consistência visual e de conversa", ["OurDream diz permitir ajustar aparência, personalidade e voz antes de conversar ou gerar imagens. Swipey também tem Custom AI, mas é preciso confirmar separadamente as condições de chat com esse personagem.", "Mantenha uma pessoa adulta inventada e altere somente cenário e roupa em duas imagens não explícitas. Registre se o rosto continua reconhecível e avalie em outra coluna a lembrança do diálogo."]],
        ["Moedas internas não têm o mesmo valor", ["OurDream descreve planos e DreamCoins; Swipey separa Premium, Hearts e Fan Club. Não compare uma unidade de DreamCoin com uma de Heart como se fossem equivalentes. Calcule o dinheiro necessário para terminar a mesma sequência de imagens, vídeo e voz.", "Confira cobrança por resultado sem utilidade, nova tentativa, transformação de imagem em vídeo, exportação e direitos sobre a saída. A palavra ilimitado em publicidade não se aplica automaticamente a todas as ferramentas."]],
        ["Material de origem e publicação", ["Faça o ensaio com um personagem adulto claramente fictício, sem foto ou voz de terceiro sem autorização. Se uma criação for pública, revise licença, visibilidade e exclusão.", "Este guia não oferece uma classificação medida da qualidade das imagens. Usamos as páginas oficiais para definir perguntas que você poderá testar."]]
      ],
      test: "Monte a mesma figura fictícia em ambos, meça o caminho do Feed ao editor, semelhança de duas imagens seguras, condições de um vídeo curto e gasto total no checkout.",
      verdict: "Quem valoriza criadoras verificadas e Fan Club deve observar Swipey AI. Se a tarefa principal é moldar a aparência, interpretar cenas e gerar mídia, inclua OurDream AI na comparação. Ambos têm Feed, e sua presença isolada não decide nada."
    },
    girlfriendgpt: {
      title: "Swipey AI vs GirlfriendGPT: criadoras e personagens da comunidade",
      description: "Compare os modelos da plataforma, de criadoras e próprios do Swipey AI com descoberta, criação e imagens do GirlfriendGPT.",
      intro: "Nos dois serviços você pode explorar personagens prontos ou criar um. No Swipey, Verified Creator Model tem ligação com uma criadora real, o que torna Fan Club uma decisão adicional. No GirlfriendGPT, as fichas comunitárias e o editor de personagem e imagem precisam ser avaliados separadamente.",
      sections: [
        ["Quem fez a figura", ["A FAQ do Swipey diferencia Platform, Verified Creator e Custom AI. O GirlfriendGPT permite ler fichas públicas de outras pessoas ou definir uma figura própria. Examine autoria, visibilidade e origem das imagens antes de escolher.", "Uma persona de IA de criadora não implica respostas digitadas por ela em tempo real. Uma imagem publicada em ficha comunitária também não é automaticamente livre para reutilização."]],
        ["Chat e imagem em testes diferentes", ["Use a mesma cena fictícia nos dois produtos; avalie saudação, manutenção do contexto após seis mensagens e iniciativa da personagem. Depois crie duas imagens seguras e observe a continuidade do rosto e do estilo.", "O fato de a tela oficial de criação do GirlfriendGPT mostrar muitas opções não prova que toda geração terá qualidade. Não fizemos medição própria de rapidez ou taxa de sucesso."]],
        ["Assinatura, créditos e complementos", ["No Swipey identifique quando Premium, Hearts e Fan Club entram no fluxo pretendido. No GirlfriendGPT confira entrada gratuita, assinatura, créditos de mensagens e imagem nos termos e no checkout atual.", "Em vez de copiar um preço antigo, orce uma semana de conversa, imagens e, se necessário, voz ou vídeo. Inclua o custo da associação à criadora caso ela seja essencial para seu uso."]],
        ["Privacidade e direitos de identidade", ["Um personagem oculto dos demais usuários ainda envolve tratamento de dados pelo provedor. Evite nome real, endereço e informações de saúde, e compare retenção e fechamento de conta.", "Para usar rosto ou voz de pessoa real, busque permissão clara. Não copie sem autorização os materiais de cartões públicos de qualquer uma das plataformas."]]
      ],
      test: "Crie a mesma figura adulta inventada nos dois serviços e anote começo da conversa, lembrança após mudar de assunto, duas imagens, visibilidade e custo semanal. Confira a procedência das referências visuais.",
      verdict: "Se a relação com criadoras verificadas e Fan Club é o centro da experiência, examine Swipey AI. Se você prefere percorrer fichas compartilhadas, criar a própria figura e usar ferramentas de imagem, compare GirlfriendGPT. Direitos e custo importam tanto quanto o cartão inicial."
    },
    lovescape: {
      title: "Swipey AI vs Lovescape: descoberta ou produção em vários formatos",
      description: "Compare o feed e a camada de criadoras do Swipey AI com o fluxo conectado de chat, história, imagem e vídeo do Lovescape.",
      intro: "O site atual do Lovescape descreve um espaço para personagens adultos fictícios em que a mesma ideia pode avançar por conversa, história, imagem e vídeo. Chamá-lo apenas de aplicativo de evolução de relacionamento não representaria bem sua proposta. O contraste está entre descobrir perfis rapidamente e dirigir um projeto entre formatos.",
      sections: [
        ["Começar com um feed ou com uma cena", ["O Explorer Feed do Swipey leva de clipes e imagens a personagens e chat. No Lovescape, aparência, cenário e direção narrativa podem ser definidos antes de conversar ou gerar uma imagem.", "Ambos incluem vídeo e imagem; marcar uma lista de recursos não basta. Meça o tempo para achar uma pessoa adequada e para transformar uma ideia específica em um primeiro resultado útil."]],
        ["Manter a mesma pessoa do texto ao vídeo", ["Lovescape propõe construir contexto no chat e levá-lo a história, imagem e vídeo. Swipey liga conversas, chamadas e mídia ao personagem, mas o acesso depende de ele ser da plataforma, de criadora ou Custom AI.", "Escolha uma cena não explícita com adultos fictícios e observe se aparência, personalidade e ambiente permanecem reconhecíveis em cada formato. A promessa de consistência não é uma taxa de acerto garantida."]],
        ["Custo por projeto terminado", ["No Swipey, separe Premium, Hearts e Fan Club. No Lovescape, revise condições atuais de imagem e vídeo, repetição após falha, armazenamento, exclusão e direitos de uso da saída.", "O custo de terminar uma imagem utilizável e um vídeo curto é mais esclarecedor que o preço mensal inicial. Este site não mediu desempenho ou taxa de sucesso de nenhum dos dois produtos."]],
        ["Limites de consentimento", ["O Lovescape informa que perfis devem representar adultos fictícios e uploads devem ser próprios ou autorizados. O mesmo cuidado com rosto, voz e identidade se aplica aos personagens criados ou ligados a criadoras no Swipey.", "Evite menores, idade ambígua, imitações sem consentimento e detalhes pessoais. Esta publicação não gera nem apresenta material explícito."]]
      ],
      test: "Com uma pessoa adulta inventada e cenário seguro, registre os passos do encontro do personagem até duas imagens e um vídeo breve, a continuidade, o custo e como apagar o projeto.",
      verdict: "Swipey AI faz mais sentido quando você quer explorar perfis e usar a camada de criadoras com Fan Club. Lovescape é opção a comparar quando a meta é desenvolver uma única ideia em chat, história, imagem e vídeo. Verifique as saídas e os termos em vigor antes de escolher."
    }
  }
};
