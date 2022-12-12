<template>
    <div class="absolute top-20 right-64 bg-white p-5 rounded-md">
      <form class="flex flex-col justify-center items-center gap-4" @submit.prevent="register">
        <label class="font-extralight">Username:</label>
        <input class="border border-black rounded-md p-1" type="text" v-model="username" />
        <label class="font-extralight">Password:</label>
        <input class="border border-black rounded-md p-1" type="password" v-model="password" />
        <button class="pt-0.5 pl-3 pb-0.5 pr-3 w-max text-[#0070E0] bg-white border border-solid border-[#0070E0] rounded hover:bg-[#0070E0] hover:text-white hover:duration-500" type="submit">Register</button>
      </form>
    </div>
</template>

<script>
export default {
data() {
    return {
    username: '',
    password: ''
    }
},
methods: {
    register() {
      
    if (this.username === "" || this.password === "") {
      alert("Please, complete the inputs")
    } else {
      localStorage.setItem('user', JSON.stringify({ username: this.username }));
    }
    
    
    }
    

}
}
</script>
  