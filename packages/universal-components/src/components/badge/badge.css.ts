import {style} from "@vanilla-extract/css"
import {recipe} from "@vanilla-extract/recipes"

export const badgeStyle = style({
  padding: "4px 8px",
  fontSize: "13px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  lineHeight: "12px",
  minWidth: "50px",
  borderRadius: "5px",
  fontWeight: "normal",
  textTransform: "uppercase"
})

export const badgeVariants = recipe({
  variants: {
    kind: {
      info: {
        color: "white",
        backgroundColor: "#4790dd"
      },
      warning: {
        color: "#2d2d2d",
        backgroundColor: "#e9aa0cc4"
      },
      success: {
        color: "white",
        backgroundColor: "rgb(9, 187, 9)"
      },
      error: {
        color: "white",
        backgroundColor: "#df2525"
      }
    },
  },
})
