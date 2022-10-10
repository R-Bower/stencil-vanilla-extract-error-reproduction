import {Component, h, Host, Prop} from "@stencil/core"
import clsx from "clsx"
import {badgeStyle, badgeVariants} from "./badge.css"

@Component({
  shadow: true,
  styleUrls: ["badge.css"],
  tag: "uc-badge",
})
export class Badge {
  /**
   * Type of the badge.
   */
  @Prop() type: "info" | "warning" | "success" | "error"

  render() {
    return (
      <Host>
        <span
          class={clsx(
            badgeStyle,
            badgeVariants({kind: this.type})
        )}>
          <slot></slot>
        </span>
      </Host>
    )
  }
}
