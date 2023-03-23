import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";

export const EmptyState = {
  user: [],
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const { data } = await axios.get(
      "https://dolar-boliviano-api-ejmycaqq4q-rj.a.run.app/user?totalsubs=all"
    );
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const postUser = createAsyncThunk("user/postUser", async (users) => {
  try {
    const data = await axios.post(
      "https://dolar-boliviano-api-ejmycaqq4q-rj.a.run.app/user",
      users
    );
    swal("Listo!", "Suscripción exitosa!", "success");
    return data;
  } catch (err) {
    swal(
      "Error en la suscripción",
      "El email ingresado ya se encuentra registrado",
      "error"
    );
    console.error(err);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: EmptyState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";

        const data = action.payload;
        state.user = data.data;

        if (data.errors === "There is not data") {
          state.user = [];
        }
      });
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
