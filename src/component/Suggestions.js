import Suggestion from "./Suggestion";
const Suggestions = ({ suggestionList }) => {
  return (
    <>
      <div>
        <p style={{ color: "#585858", fontWeight: "bold" }}>
          Suggestions for you
        </p>
        <div className="suggestions">
          {suggestionList.map((suggest) => {
            return <Suggestion suggest={suggest} key={suggest.id} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Suggestions;
