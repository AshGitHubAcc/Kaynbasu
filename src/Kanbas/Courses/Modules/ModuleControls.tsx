import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls(
{ moduleName, setModuleName, addModule }:
{ moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
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
                    <GreenCheckmark />
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Publish all modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                            <GreenCheckmark />
                            Publish modules only
                        </a>
                    </li>
                </ul>
            </div>
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger" data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </button>
            <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
                    setModuleName={setModuleName} addModule={addModule} />

        </div>
    );
}
