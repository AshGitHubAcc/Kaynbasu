export default function AssignmentEditor() {
    return (
        
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-assignment-group">
                    <option value="group1">Group 1</option>
                    <option value="group2">Group 2</option>
                    <option value="group3">Group 3</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade">Display Grade As</label>
            </td>
            <td>
                <select id="wd-display-grade">
                    <option value="points">Points</option>
                    <option value="percentage">Percentage</option>
                    <option value="letter">Letter Grade</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="online">Online</option>
                    <option value="paper">Paper</option>
                    <option value="none">No Submission</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-online-entry-options">Online Entry Options</label>
            </td>
            <td>
                <select id="wd-online-entry-options" multiple>
                    <option value="text">Text Entry</option>
                    <option value="url">Website URL</option>
                    <option value="media">Media Recording</option>
                    <option value="file">File Upload</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
                <input id="wd-assign-to" type="text" />
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
                <input id="wd-due-date" type="date" />
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
                <input id="wd-available-from" type="date" />
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
                <input id="wd-available-until" type="date" />
            </td>
        </tr>
        <tr>
            <td colSpan={2} align="right">
                <button type="button">Cancel</button>
                <button type="button">Save</button>
            </td>
        </tr>
        </table>
      </div>
  );}
  