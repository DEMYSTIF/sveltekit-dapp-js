<script>
    export let form
    // console.log(form)
</script>

<div class="mx-auto max-w-xl h-auto bg-white rounded-lg border-8 border-teal-500 shadow-md dark:bg-gray-800 dark:border-pink-400">
    <div class="border-4 border-slate-500 rounded-lg m-1">
        <div class="border-4 border-teal-500 rounded-lg m-6">
            <div class="border-2 border-slate-500 rounded-lg m-1">
                <div class="flex flex-col items-center p-10">
                    <h2 class="mb-4 text-lg">Kerala Blockchain Academy</h2>
                    <span class="text-lg text-gray-500 dark:text-gray-400">This is to certify that</span>
                    <h3 class="my-4 text-2xl font-medium text-gray-900 dark:text-white">{form.response[0]}</h3>
                    <span class="text-lg text-gray-500 dark:text-gray-400">has successfully completed</span>
                    <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{form.response[1]}</h3>
                    <span class="text-lg text-gray-500 dark:text-gray-400">with</span>
                    <h3 class="mb-1 text-lg font-medium text-gray-900 dark:text-white">{form.response[2]} Grade.</h3>
                </div>
                <div class="flex grow">
                    <p class="grow ml-8">Certificate ID: TBD</p>
                    <div class="mr-8 text-end">
                        <p>Date: {form.response[3]}</p>
                        <p>Trivandrum</p>
                    </div>
                </div>
                <br /><br />
                <div class="mr-8 mb-4 text-end">
                    <p>(sd/-)</p>
                    <p>Director</p>
                </div>
            </div>
        </div>
    </div>
</div>