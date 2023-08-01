import "./styles.css";
// react-hook-formから、useFormとSubmitHandlerをimport
// SubmitHandlerは、submitイベントに関する関数の型宣言に使う
import { useForm, SubmitHandler } from "react-hook-form";

// フォームの入力値についての型定義。useFormフックを書く時に使う。
type FormInput = {
  name: string;
  age: number;
};

export default function App() {
  // useFormフックを使い、registerとhandleSubmitを取得する。
  // registerは、フォームのフィールドを登録することで、バリデーションを機能させる。
  // handleSubmitは、submitイベントの制御に関わる。
  const { register, handleSubmit } = useForm<FormInput>();

  // submitイベントが発生して、かつバリデーションが成功した場合に実行する関数。
  // サンプルコードなので、入力値（data）をコンソール出力するだけの処理を用意。
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    // handleSubmitの第1引数は、バリデーションを通った場合にのみ実行される。
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        名前
        {/* registerの第1引数の文字列は、name属性の値としても利用される。 */}
        {/* registerの第2引数には、バリデーションの種類を設定できる。 */}
        {/* requiredにtrueを設定すると、入力必須の状態になる。 */}
        <input {...register("name", { required: true })} />
      </label>
      <label>
        年齢
        <input type="number" {...register("age", { required: true })} />歳
      </label>
      <button>送信する</button>
    </form>
  );
}