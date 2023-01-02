<script>
	export let form;
	// export let data;
	// console.log(form)
</script>

<h1>Issue Certificate</h1>

{#if form?.success}
	<p>Certificate issued for {form.id}!!</p>
{:else}
	<form class="pt-16" action="/issue" method="POST">
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
				>Certificate ID</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input
				type="text"
				name="candidate"
				id="candidate"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				placeholder=" "
				required
			/>
			<label
				for="candidate"
				class="peer-focus:font-medium absolute text-sm text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>Candidate Name</label
			>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<label for="course" class="sr-only">Course Title</label>
			<select
				id="course"
				name="course"
				class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
			>
				<option selected disabled>Course Title</option>
				<option value="Certified Ethereum Developer">Certified Ethereum Developer</option>
				<option value="Certified Hyperledger Fabric Developer"
					>Certified Hyperledger Fabric Developer</option
				>
				<option value="Certified Blockchain Architect">Certified Blockchain Architect</option>
				<option value="Certified Blockchain Startup">Certified Blockchain Startup</option>
			</select>
		</div>
		<div class="grid md:grid-cols-2 md:gap-6">
			<div class="relative z-0 mb-6 w-full group">
				<label for="grade" class="sr-only">Grade</label>
				<select
					id="grade"
					name="grade"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
				>
					<option selected disabled>Select Grade</option>
					<option value="S">S</option>
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
				</select>
			</div>
			<div class="relative z-0 mb-6 w-full group">
				<input
					type="date"
					name="date"
					id="date"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
			</div>
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Submit</button
		>
	</form>
{/if}
