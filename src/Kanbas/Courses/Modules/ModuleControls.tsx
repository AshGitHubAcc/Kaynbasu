import { FaPlus } from "react-icons/fa6";
import GreenIcon from "./GreenIcon";

export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="d-flex justify-content-start gap-1 mb-3">
            <button id="wd-collapse-all-btn" className="btn btn-lg btn-secondary">
                Collapse All
            </button>
            <button id="wd-view-progress-btn" className="btn btn-lg btn-secondary">
                View Progress
            </button>
            <div className="dropdown">
                <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
                    type="button" data-bs-toggle="dropdown">
                    <GreenIcon />
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                            <GreenIcon />
                            Publish all modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                            <GreenIcon />
                            Publish modules only
                        </a>
                    </li>
                </ul>
            </div>
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </button>
        </div>
    );
}
