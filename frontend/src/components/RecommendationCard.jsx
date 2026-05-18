import ReactMarkdown from "react-markdown";

function RecommendationCard({ recommendation }) {

  return (
    <div className="recommendation-box">

      <h2>AI Recommendation</h2>

      <ReactMarkdown>
        {recommendation}
      </ReactMarkdown>

    </div>
  );
}

export default RecommendationCard;