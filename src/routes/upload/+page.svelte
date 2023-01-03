<script>
	import { create } from 'ipfs-http-client';
	// export let form;
	// export let data;
	// console.log(form)
	let result;
	const uploadToIpfs = async (e) => {
		const file = e.target.files[0];
		const client = create('/ip4/127.0.0.1/tcp/5001');
		result = await client.add(file);
		console.log(result);
	};
</script>

<h1>Upload Document</h1>

<form class="pt-16" action="/upload" method="POST" enctype="multipart/form-data">
	<div class="relative z-0 mb-6 w-full group">
		<input
			type="text"
			name="id"
			id="id"
			class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
			placeholder=" "
			required
		/>
		<label
			for="id"
			class="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
			>Document ID</label
		>
	</div>
	<!-- <div class="relative z-0 mb-6 w-full group">
			<input
				type="file"
				name="document"
				id="document"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				required
                accept="image/*"
			/>
			<label
				for="document"
				class="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Upload Document</label
			>
		</div> -->
	<div class="grid md:grid-cols-2 md:gap-6">
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="file"
				name="document"
				id="document"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				required
				accept="image/*"
				on:change={uploadToIpfs}
			/>
			<!-- <label
				for="document"
				class="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Upload Document</label
			> -->
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="cid"
				id="cid"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder="CID will appear here"
				disabled
				value={result ? result.path : null}
			/>
		</div>
	</div>
	<button
		type="submit"
		class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Submit</button
	>
</form>
