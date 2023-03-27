import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";

export const EmptyState = {
  subs: 0,
  users: [],
};

export const fetchSubs = createAsyncThunk("subs/fetchSubs", async () => {
  try {
    const res = await axios.get(
      "https://dolar-boliviano-api-ejmycaqq4q-rj.a.run.app/user?totalsubs=all"
    );
    const data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const postUser = createAsyncThunk("user/postUser", async (users) => {
  try {
    const res = await axios.post(
      "https://dolar-boliviano-api-ejmycaqq4q-rj.a.run.app/user",
      users
    );
    swal("Listo!", "Suscripción exitosa!", "success");
    return res;
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
      state.users.push(action);
    },
    getSubs: (state, action) => {
      state.subs = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSubs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSubs.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(fetchSubs.fulfilled, (state, action) => {
        state.status = "succeeded";

        const data = action.payload;
        //state.user = res.data;
        state.subs = data;

        if (data.errors === "There is not data") {
          state.users = [];
          state.subs = 0;
        }
      });
  },
});

export const { addUser, getSubs } = userSlice.actions;

export default userSlice.reducer;
