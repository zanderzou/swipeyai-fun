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
  }
};
