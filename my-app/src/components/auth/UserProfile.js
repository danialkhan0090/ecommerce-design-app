import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  Stack,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar,
  IconButton,
  Alert,
} from "@mui/material";
import { Edit, Logout, Save, Cancel } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Mock order data (replace with API call)
const mockOrders = [
  {
    id: 1,
    date: "2024-03-15",
    total: 129.99,
    status: "Delivered",
    items: ["Blue T-shirt", "Jeans Bag"],
  },
  {
    id: 2,
    date: "2024-03-10",
    total: 89.99,
    status: "In Transit",
    items: ["Smart Watch", "Lamp"],
  },
];

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [editing, setEditing] = useState(false);
  const [orders, setOrders] = useState(mockOrders);
  const [message, setMessage] = useState("");
  const [editedUser, setEditedUser] = useState({
    email: user?.email || "",
    address: user?.address || "",
    phone: user?.phone || "",
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSaveChanges = () => {
    const updatedUser = { ...user, ...editedUser };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditing(false);
    setMessage("Profile updated successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {message && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {message}
        </Alert>
      )}

      <Stack spacing={3}>
        {/* Welcome Section */}
        <Paper elevation={1} sx={{ p: 3 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: "primary.main",
                  fontSize: "2rem",
                }}
              >
                {user?.name?.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="h5">Welcome, {user?.name}!</Typography>
                <Typography variant="body2" color="text.secondary">
                  Member since {new Date().toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
            <Button
              startIcon={<Logout />}
              onClick={handleLogout}
              color="error"
              variant="outlined"
            >
              Logout
            </Button>
          </Box>
        </Paper>

        {/* Account Settings */}
        <Paper elevation={1} sx={{ p: 3 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">Account Settings</Typography>
            {!editing ? (
              <IconButton onClick={() => setEditing(true)} color="primary">
                <Edit />
              </IconButton>
            ) : (
              <Box>
                <IconButton onClick={handleSaveChanges} color="success">
                  <Save />
                </IconButton>
                <IconButton
                  onClick={() => setEditing(false)}
                  color="error"
                  sx={{ ml: 1 }}
                >
                  <Cancel />
                </IconButton>
              </Box>
            )}
          </Box>
          <Stack spacing={2}>
            <TextField
              label="Email"
              value={editing ? editedUser.email : user?.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
              disabled={!editing}
              fullWidth
            />
            <TextField
              label="Shipping Address"
              value={editing ? editedUser.address : user?.address}
              onChange={(e) =>
                setEditedUser({ ...editedUser, address: e.target.value })
              }
              disabled={!editing}
              fullWidth
              multiline
              rows={2}
            />
            <TextField
              label="Phone Number"
              value={editing ? editedUser.phone : user?.phone}
              onChange={(e) =>
                setEditedUser({ ...editedUser, phone: e.target.value })
              }
              disabled={!editing}
              fullWidth
            />
          </Stack>
        </Paper>

        {/* Order History */}
        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Order History
          </Typography>
          <List>
            {orders.map((order, index) => (
              <React.Fragment key={order.id}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" color="primary">
                        Order #{order.id} - {order.status}
                      </Typography>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2">
                          Date: {order.date}
                        </Typography>
                        <Typography variant="body2">
                          Items: {order.items.join(", ")}
                        </Typography>
                        <Typography variant="body2" color="success.main">
                          Total: ${order.total}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                {index < orders.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Stack>
    </Container>
  );
};

export default UserProfile;
