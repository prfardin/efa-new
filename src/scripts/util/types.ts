/**
 * we define our types here (most of our types are UIkit types).
 * we're doing this to keep clean our util scripts file.
 * may in the future we update UIkit typescript library
 * and make types exportable, and prevent from doing this
 */
import UIkit from "uikit"

import UIkitGridOptions = UIkit.UIkitGridOptions
import UIkitIconOptions = UIkit.UIkitIconOptions
import UIkitHeightViewportOptions = UIkit.UIkitHeightViewportOptions
import UIkitNavOptions = UIkit.UIkitNavOptions

export {
    UIkitGridOptions,
    UIkitIconOptions,
    UIkitHeightViewportOptions,
    UIkitNavOptions
}