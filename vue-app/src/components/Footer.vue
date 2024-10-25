<template>
    <div class="page-container">
        <div class="content">
            
        </div>
        <div class="footer">
            <p>&copy;2024 MFNZR</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
.page-container {
        display: flex;
        flex-direction: column;
        min-height: 20vh;
    }

    .content {
        flex: 1; 
    }
    .footer {
        background-color: #db6415;
        color: white;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;        
    }
    p {
        font-size: 14px;
    }
</style>