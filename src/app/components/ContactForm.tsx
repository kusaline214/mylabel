import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  details: string;
};

const FormBox = styled.div`
  color: #333;
  text-align: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;

  h2 {
    color: #333;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    label {
      font-weight: bold;
      font-size: 0.9rem;
      color: #555;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    input[type="submit"] {
      background-color: #000000;
      width: 24%;
      color: white;
      padding: 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      border: none;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    input[type="submit"]:hover {
      background-color: #0056b3;
    }

    .error {
      color: red;
      font-size: 0.8rem;
    }
  }
`;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <FormBox>
      <h2>お問合せ</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          お名前<span className="required">*</span>
        </label>
        <input
          id="name"
          {...register("name", { required: "お名前は必須です" })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <label htmlFor="email">
          Email<span className="required">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Emailは必須です",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "有効なメールアドレスを入力してください",
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <label htmlFor="details">
          詳細<span className="required">*</span>
        </label>
        <textarea
          id="details"
          {...register("details", { required: "詳細は必須です" })}
        />
        {errors.details && (
          <span className="error">{errors.details.message}</span>
        )}

        <input type="submit" value="送信" />
      </form>
    </FormBox>
  );
}
