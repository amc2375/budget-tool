export default function SubmitButton({ handleSubmit }) {
    return (
      <button
        type={"button"}
        onClick={handleSubmit}>{"Submit"}</button>
    );
};
