import React, { useEffect } from "react";
import { Button, TextField, Typography, Box, Divider } from "@mui/material";
import apiClient from "../Api/ApiClient";
import ApiEndPoint from "../Api/ApiEndPoint";
import LoadingButton from "@mui/lab/LoadingButton";

const UpdateKey = () => {
  const [edit, setEdit] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [updating, setUpdating] = React.useState(false);

  useEffect(() => {
    fetchApiKey();
  }, []);

  const fetchApiKey = async () => {
    const response = await apiClient.get(ApiEndPoint.ADMIN);
    setToken(response.data);
  };

  const handleSave = async () => {
    setEdit(false);
    if (token === "") {
      return;
    }
    setUpdating(true);
    const response = await apiClient.put(ApiEndPoint.ADMIN, {
      apiKey: token,
    });
    setUpdating(false);
    fetchApiKey();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Update Telegram Bot Token
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {edit ? (
            <TextField
              label="API Key"
              variant="outlined"
              size="small"
              fullWidth
              value={token}
              onChange={(e) => setToken((prev) => e.target.value)}
              autoFocus
            />
          ) : (
            <Box
              sx={{
                padding: "8px 12px",
                border: "1px solid",
                borderColor: "grey.400",
                borderRadius: 1,
                width: "100%",
                cursor: "pointer",
                backgroundColor: "grey.100",
                "&:hover": {
                  backgroundColor: "grey.200",
                },
                transition: "background-color 0.3s ease",
              }}
              onDoubleClick={() => setEdit(true)}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                fontStyle="italic"
              >
                Double-click to edit
              </Typography>
              <Typography variant="body2">{token ?? ""}</Typography>
            </Box>
          )}
          {edit && (
            <LoadingButton
              onClick={handleSave}
              variant="contained"
              color="primary"
              size="small"
              loading={updating}
            >
              Save
            </LoadingButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateKey;
