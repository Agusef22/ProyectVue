<template>
  <div class="absolute top-20 right-64 bg-white p-5 rounded-md shadow-md">
    <form
      class="flex flex-col justify-center items-center gap-4"
      @submit.prevent="login"
    >
      <label class="font-extralight">Username:</label>
      <input
        class="border border-black rounded-md p-1"
        type="text"
        v-model="username"
      />
      <label class="font-extralight">Password:</label>
      <input
        class="border border-black rounded-md p-1"
        type="password"
        v-model="password"
      />
      <button
        class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username === "" || this.password === "") {
        alert("Please, complete the inputs");
      } else {
        const users = JSON.parse(localStorage.getItem("users"));
        const user = users.find((user) => user.username === this.username);

        if (!user) {
          alert("this user doesnt exist");
          return;
        }

        if (this.password !== user.password) {
          alert("Incorrect password, try again");
          return;
        }

        alert("Logged in");

        // localStorage.setItem('user', JSON.stringify({ username: this.username }));
      }
    },
  },
};
</script>
