import { memo } from "react"
import { Link } from "react-router-dom"

function Back() {
    return(
        <div className="Back flex justify-end p-2">
        <Link
          to="/bazrafkan-store/"
          className="text-[#135e9e] p-2 rounded-sm"
        >
          بازگشت به فروشگاه
          <i className="fa fa-arrow-left pr-1 text-[78%]"></i>
        </Link>
      </div>
    )
}
export default memo(Back)
