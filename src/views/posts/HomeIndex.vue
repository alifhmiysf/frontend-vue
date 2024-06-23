<template>
    <div class="container mt-custom">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA POST</h4>
                        <hr>
                        <router-link :to="{ name: 'posts.create' }" class="btn btn-md btn-success">TAMBAH POST</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">TITLE</th>
                                    <th scope="col">CONTENT</th>
                                    <th scope="col">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(post, index) in posts" :key="index">
                                    <td>{{ post.title }}</td>
                                    <td>{{ post.content }}</td>
                                    <td class="text-center">
                                        <!-- Tambahkan tombol Edit dan Hapus di sini -->
                                        <router-link :to="{name: 'posts.edit', params:{id: post.id}}" class="btn btn-primary me-2">EDIT</router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
    setup() {
        // Reactive state
        let posts = ref([]);

        // Mounted
        onMounted(() => {
            // Panggil function "getDataPosts"
            getDataPosts();
        });

        // Function "getDataPosts"
        function getDataPosts() {
            // Get API from Express Backend
            axios.get('http://localhost:3000/api/posts')
                .then(response => {
                    // Assign state posts with response data
                    posts.value = response.data.data;
                })
                .catch(error => {
                    console.error('Error fetching posts:', error);
                });
        }

        // Return
        return {
            posts,
            getDataPosts
        };
    }
};
</script>
