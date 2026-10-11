import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Badge, Dots } from "./ui";

export function SampleReport() {
  return (
    <div className="receipt">
      <div className="receipt-header">
        <span className="traffic" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>brew-lane.visibility</span>
        <Badge label="Sample data" />
      </div>
      <div className="receipt-body">
        <div className="receipt-business">
          <span>BUSINESS</span>
          <strong>Brew Lane Cafe</strong>
          <span>Portland, United States</span>
        </div>
        <div className="receipt-question">
          <span>QUESTION</span>
          <p>“Where can I find a quiet cafe in Portland?”</p>
          <Dots count={3} />
        </div>
        <div className="receipt-result">
          <span>OUTLOOK</span>
          <Badge label="Winnable now" />
        </div>
        <div className="receipt-bottom">
          <CheckCircle size={16} />5 runs. Sources attached. No guesswork.
        </div>
      </div>
    </div>
  );
}
