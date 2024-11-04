import { memo } from "react";
import { css } from "@emotion/react";
import { media } from "@/app/css/media";

const Logo = memo(function Logo() {
  return (
    <div
      css={css`
        color: #ff6b00;
      `}
    >
      LOGO
    </div>
  );
});

export default Logo;