import * as React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

export default function ToolTip({ content, expand, action }) {
  return (
    <Box>
      <Tooltip
        onClick={action}
        title={
          expand ? (
            <Typography variant="body2" component="span">
              {expand}
            </Typography>
          ) : (
            ""
          )
        }
        followCursor
      >
        <Box>
          <Typography variant="body2" component="span">
            {content ? content : ""}
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
}
