    <template>
        <div class="container mt-custom">
        <div class="row">
            <div class="col-md-12">
            <div class="card border-0 rounded shadow">
                <div class="card-body">
                <h4>TAMBAH POST</h4>
                <hr>
                <div v-if="validation.errors" class="mt-2 alert alert-danger">
                    <ul class="mt-0 mb-0">
                    <li v-for="(error, index) in validation.errors" :key="index">{{ `${error.param} : ${error.msg}` }}</li>
                    </ul>
                </div>
                <form @submit.prevent="store">
                    <div class="form-group">
                    <label for="title" class="font-weight-bold mb-2">TITLE</label>
                    <input type="text" class="form-control" v-model="post.title" placeholder="Masukkan Judul Post">
                    </div>
                    <div class="form-group mt-3">
                    <label for="content" class="font-weight-bold mb-2">CONTENT</label>
                    <textarea class="form-control" rows="4" v-model="post.content" placeholder="Masukkan Konten Post"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">SIMPAN</button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </template>
    
    <script>
    import { reactive, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import axios from 'axios'
    
    export default {
        setup() {
        const post = reactive({
            title: '',
            content: ''
        })
    
        const validation = ref({})
        const router = useRouter()
    
        function store() {
            axios.post('http://localhost:3000/api/posts/store', post)
            .then(response => {
                console.log('Post created successfully:', response.data)
                router.push({ name: 'posts.index' })
            })
            .catch(error => {
                if (error.response && error.response.data) {
                validation.value = error.response.data
                } else {
                console.error('Error creating post:', error)
                }
            })
        }
    
        return {
            post,
            validation,
            store
        }
        }
    }
    </script>
    
    <style scoped>
    .mt-custom {
        margin-top: 110px;
    }
    </style>
  