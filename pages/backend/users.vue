<script setup lang="ts">

const { data: users, error } = await userUSERS().getUsers()



const viewPost = (id: number) => {
    alert(`View post with ID: ${id}`);
};

const editPost = (id: number) => {
    alert(`Edit post with ID: ${id}`);
};

const deletePost = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
        alert(`Deleted post with ID: ${id}`);
    }
};

definePageMeta({
    layout: 'backend',
})

useHead({
    title: 'Users',
    meta: [
        {
            name: 'keywords',
            content: 'Users, Nuxt 3, Backend'
        },
        {
            name: 'Description',
            content: 'Users Nuxt 3,  IT Genius Engineering'
        }
    ]
})

</script>

<template>
    <h2 class="text-2xl font-bold mb-6">Users</h2>
    <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Manage</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.createdAt }}</td>
                    <td class="space-x-2">
                        <button class="btn btn-sm btn-primary" @click="viewPost(user.id)">View</button>
                        <button class="btn btn-sm btn-warning" @click="editPost(user.id)">Edit</button>
                        <button class="btn btn-sm btn-error" @click="deletePost(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<style scoped></style>