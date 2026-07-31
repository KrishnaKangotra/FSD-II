import { useDispatch, useSelector } from "react-redux";
import { changePlatform } from "../features/platformSlice";

function PlatformSelector() {
  const dispatch = useDispatch();

  const platform = useSelector(
    (state) => state.platform.selectedPlatform
  );

  return (
    <div className="section">
      <label>Select Platform</label>

      <select
        value={platform}
        onChange={(e) =>
          dispatch(changePlatform(e.target.value))
        }
      >
        <option value="LinkedIn">LinkedIn</option>

        <option value="Facebook">Facebook</option>

        <option value="Instagram">Instagram</option>

        <option value="X">X</option>
      </select>
    </div>
  );
}

export default PlatformSelector;