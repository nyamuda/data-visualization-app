<template>
    <div class="flex flex-col h-screen justify-between">
        <header class="bg-gray-800 text-gray-100 h-12 .shadow">
            <div class="h-full flex items-center justify-between">
                <p class="text-xl ml-4">Survey App</p>
                <button
                    @click.prevent="logoutUser"
                    class="bg-gray-600 rounded-sm text-gray-100 p-2 hover:bg-gray-500 transition duration-300 ease-linear mr-16"
                >
                    Logout
                </button>
            </div>
        </header>
        <div class="mb-auto mt-10">
            <div class="question_container mt-8 m-auto shadow-xl">
                <div class="bg-purple-500 p-2 text-gray-100">
                    <p>Survey : {{ category_data[0]["category_name"] }}</p>
                </div>
                <div class="bg-purple-900 text-purple-300 px-2 py-1">
                    <p class="text-xs">
                        Number Questions : {{ category_data.length }}
                    </p>
                </div>
                <div
                    class="flex justify-around flex-col bg-gray-100 px-4"
                    v-for="(question, index) in category_data"
                    :key="question.id"
                >
                    <hr class="border-gray-300" />
                    <!-- If the question type is open ended -->
                    <div class="mb-4" v-if="question.type == 'Open Ended'">
                        <div class="p-2 w-auto flex flex-row">
                            <!--The Entity Number below is for space -->
                            <span>{{ index + 1 }}.&#160;&#160;</span>
                            <ul>
                                <li>{{ question.question }}</li>
                            </ul>
                        </div>

                        <div class="flex flex-col items-start ml-4">
                            <!--The purpose of the following first input element is to hold
                the id value of each question. The second input element holds
                the category id of the question-->
                            <input
                                type="text"
                                hidden
                                :value="question.question_id"
                            />
                            <input
                                type="text"
                                hidden
                                :value="question.category_id"
                            />
                            <!--All text area questions(open-ended) have a class name of open-ended -->
                            <textarea
                                required
                                :id="'open_' + question.question_id"
                                :name="'quiz_' + question.question_id"
                                rows="4"
                                cols="50"
                                class="open-ended w-5/6 p-2 bg-gray-200 focus:outline-none transition duration-500 ease-in focus:bg-green-100"
                            ></textarea>
                            <div>
                                <p
                                    :id="'quiz_' + question.question_id"
                                    class="text-red-600 text-xs text-center mt-4"
                                ></p>
                            </div>
                        </div>
                    </div>
                    <!-- If the question type is a scale -->
                    <div
                        class="mb-4 flex flex-col justify-around"
                        v-else-if="question.type == 'Scale'"
                    >
                        <!--The purpose of the following first input element is to hold
                the id value of each question. The second input element holds
                the category id of the question-->
                        <input
                            type="text"
                            hidden
                            :value="question.question_id"
                        />
                        <input
                            type="text"
                            hidden
                            :value="question.category_id"
                        />
                        <div class="p-2 w-auto flex flex-row">
                            <!--The Entity Number below is for space -->
                            <span>{{ index + 1 }}.&#160;&#160;</span>
                            <ul>
                                <li>{{ question.question }}</li>
                            </ul>
                        </div>
                        <div class="my-scale relative m-auto">
                            <input
                                type="text"
                                hidden
                                :value="question.question_id"
                            />
                            <input
                                type="text"
                                hidden
                                :value="question.category_id"
                            />
                            <div
                                class="flex justify-between flex-wrap text-gray-500 text-sm"
                            >
                                <p>0 = Not likely at all</p>
                                <p>10 = Extremely likely</p>
                            </div>
                            <div class="flex justify-evenly flex-wrap">
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-red-700 focus:outline-none appearance-none bg-red-700 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-red-700 transition duration-500 ease-in-out"
                                    type="button"
                                    value="0"
                                />
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-red-600 focus:outline-none appearance-none bg-red-600 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-red-600 transition duration-500 ease-in-out"
                                    type="button"
                                    value="1"
                                />
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-red-500 focus:outline-none appearance-none bg-red-500 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-red-500 transition duration-500 ease-in-out"
                                    type="button"
                                    value="2"
                                />
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-yellow-700 focus:outline-none appearance-none bg-yellow-700 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-yellow-700 transition duration-500 ease-in-out"
                                    type="button"
                                    value="3"
                                />
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-yellow-600 focus:outline-none appearance-none bg-yellow-600 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-yellow-600 transition duration-500 ease-in-out"
                                    type="button"
                                    value="4"
                                />
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-yellow-500 focus:outline-none appearance-none bg-yellow-500 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-yellow-500 transition duration-500 ease-in-out"
                                    type="button"
                                    value="5"
                                />
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-yellow-400 focus:outline-none appearance-none bg-yellow-400 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-yellow-400 transition duration-500 ease-in-out"
                                    type="button"
                                    value="6"
                                />
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-green-400 focus:outline-none appearance-none bg-green-400 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-green-400 transition duration-500 ease-in-out"
                                    type="button"
                                    value="7"
                                />
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-green-500 focus:outline-none appearance-none bg-green-500 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-green-500 transition duration-500 ease-in-out"
                                    type="button"
                                    value="8"
                                />
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-green-600 focus:outline-none appearance-none bg-green-600 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-green-600 transition duration-500 ease-in-out"
                                    type="button"
                                    value="9"
                                />
                                <input
                                    @click="buttonClicked"
                                    :name="'quiz_' + index"
                                    class="cat_input md:h-12 sm:w-12 sm:h-12 my-1 mx-1 cursor-pointer focus:ring-2 ring-opacity-50 ring-offset-2 focus:ring-green-700 focus:outline-none appearance-none bg-green-700 text-gray-100 rounded-full flex items-center justify-center h-10 w-10 hover:bg-green-700 transition duration-500 ease-in-out"
                                    type="button"
                                    value="10"
                                />
                            </div>
                        </div>
                        <div>
                            <p
                                :id="'quiz_' + index"
                                class="text-red-600 text-xs text-center"
                            ></p>
                        </div>
                    </div>
                    <!-- If the question type is multiple choice -->
                    <div
                        class="mb-4 flex flex-col justify-around"
                        v-else-if="question.type == 'Multiple Choice'"
                    >
                        <div class="p-2 w-auto flex flex-row">
                            <!--The Entity Number below is for space -->
                            <span>{{ index + 1 }}.&#160;&#160;</span>
                            <ul>
                                <li>{{ question.question }}</li>
                            </ul>
                        </div>
                        <div
                            class="flex flex-col px-4 pb-4 md:mt-4 md:flex-row md:justify-between md:-ml-2"
                        >
                            <!--The purpose of the following first input element is to hold
                the id value of each question. The second input element holds
                the category id of the question-->
                            <input
                                type="text"
                                hidden
                                :value="question.question_id"
                            />
                            <input
                                type="text"
                                hidden
                                :value="question.category_id"
                            />
                            <label
                                class="flex justify-start items-center"
                                :for="'very_unhappy_' + question.question_id"
                            >
                                <input
                                    @click="radioClicked"
                                    required="required"
                                    value="20"
                                    class="emoji-input cat_input w-4 h-4"
                                    type="radio"
                                    :name="'quiz_' + index"
                                    :id="'very_unhappy_' + question.question_id"
                                /><span class="text-xl ml-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns:svgjs="http://svgjs.com/svgjs"
                                        version="1.1"
                                        width="30"
                                        height="30"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 512 512"
                                        style="enable-background:new 0 0 512 512"
                                        xml:space="preserve"
                                        class=""
                                    >
                                        <g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="m437.02 74.98c-48.353-48.351-112.64-74.98-181.02-74.98s-132.667 26.629-181.02 74.98c-48.351 48.353-74.98 112.64-74.98 181.02s26.629 132.667 74.98 181.02c48.353 48.351 112.64 74.98 181.02 74.98s132.667-26.629 181.02-74.98c48.351-48.353 74.98-112.64 74.98-181.02s-26.629-132.667-74.98-181.02zm-21.214 340.826c-42.686 42.686-99.439 66.194-159.806 66.194s-117.12-23.508-159.806-66.194-66.194-99.439-66.194-159.806 23.508-117.12 66.194-159.806 99.439-66.194 159.806-66.194 117.12 23.508 159.806 66.194 66.194 99.439 66.194 159.806-23.508 117.12-66.194 159.806z"
                                                    fill="#c50505"
                                                    data-original="#000000"
                                                    style=""
                                                    class=""
                                                />
                                                <path
                                                    d="m256 312.895c-21.783 0-42.821 9.114-57.719 25.005l-31.004 33.07 21.886 20.519 31.004-33.07c9.25-9.866 22.31-15.524 35.833-15.524s26.584 5.658 35.834 15.524l31.005 33.07 21.885-20.519-31.004-33.07c-14.899-15.891-35.937-25.005-57.72-25.005z"
                                                    fill="#c50505"
                                                    data-original="#000000"
                                                    style=""
                                                    class=""
                                                />
                                                <path
                                                    d="m185.059 265.356v-52.216c3.525 2.908 6.789 6.18 9.739 9.798l11.185 13.716 23.25-18.959-11.185-13.716c-16.621-20.383-40.172-33.194-66.314-36.073l-33.512-3.691-3.284 29.819s37.949 4.29 40.122 4.74v66.583h29.999z"
                                                    fill="#c50505"
                                                    data-original="#000000"
                                                    style=""
                                                    class=""
                                                />
                                                <path
                                                    d="m360.268 167.906c-26.144 2.878-49.694 15.689-66.315 36.073l-11.185 13.716 23.25 18.959 11.185-13.716c2.95-3.618 6.214-6.89 9.739-9.798v52.217h30v-66.582c2.173-.45 40.122-4.74 40.122-4.74l-3.285-29.819z"
                                                    fill="#c50505"
                                                    data-original="#000000"
                                                    style=""
                                                    class=""
                                                />
                                            </g>
                                        </g></svg></span
                                >&#160;Very Unhappy
                            </label>
                            <label
                                class="flex justify-start items-center"
                                :for="'unhappy_' + question.question_id"
                            >
                                <input
                                    @click="radioClicked"
                                    value="40"
                                    class="emoji-input cat_input w-4 h-4"
                                    type="radio"
                                    :name="'quiz_' + index"
                                    :id="'unhappy_' + question.question_id"
                                /><span class="text-xl ml-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns:svgjs="http://svgjs.com/svgjs"
                                        version="1.1"
                                        width="30"
                                        height="30"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 106.059 106.059"
                                        style="enable-background:new 0 0 512 512"
                                        xml:space="preserve"
                                        class=""
                                    >
                                        <g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M90.546,15.518C69.858-5.172,36.199-5.172,15.515,15.513C-5.173,36.198-5.171,69.858,15.517,90.547   c20.682,20.684,54.341,20.684,75.027-0.004C111.23,69.858,111.229,36.2,90.546,15.518z M84.757,84.758   c-17.494,17.494-45.96,17.496-63.455,0.002c-17.498-17.497-17.496-45.966,0-63.46C38.796,3.807,67.261,3.805,84.759,21.302   C102.253,38.796,102.251,67.265,84.757,84.758z M77.017,74.001c0.658,1.521-0.042,3.286-1.562,3.943   c-1.521,0.66-3.286-0.042-3.944-1.562c-2.893-6.689-9.73-11.012-17.421-11.012c-7.868,0-14.747,4.319-17.522,11.004   c-0.479,1.154-1.596,1.851-2.771,1.851c-0.384,0-0.773-0.074-1.15-0.23c-1.53-0.636-2.255-2.392-1.62-3.921   c3.71-8.932,12.764-14.703,23.063-14.703C64.174,59.371,73.174,65.113,77.017,74.001z M33.24,38.671   c0-3.424,2.777-6.201,6.201-6.201c3.423,0,6.2,2.776,6.2,6.201c0,3.426-2.777,6.202-6.2,6.202   C36.017,44.873,33.24,42.097,33.24,38.671z M61.357,38.671c0-3.424,2.779-6.201,6.203-6.201c3.423,0,6.2,2.776,6.2,6.201   c0,3.426-2.776,6.202-6.2,6.202S61.357,42.097,61.357,38.671z"
                                                    fill="#e71c1c"
                                                    data-original="#000000"
                                                    style=""
                                                    class=""
                                                />
                                            </g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                        </g></svg></span
                                >&#160;Unhappy</label
                            >
                            <label
                                class="flex justify-start items-center"
                                :for="'neutral_' + question.question_id"
                            >
                                <input
                                    @click="radioClicked"
                                    value="60"
                                    class="emoji-input cat_input w-4 h-4"
                                    type="radio"
                                    :name="'quiz_' + index"
                                    :id="'neutral_' + question.question_id"
                                /><span class="text-xl ml-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns:svgjs="http://svgjs.com/svgjs"
                                        version="1.1"
                                        width="30"
                                        height="30"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 512 512"
                                        style="enable-background:new 0 0 512 512"
                                        xml:space="preserve"
                                        class=""
                                    >
                                        <g>
                                            <path
                                                xmlns="http://www.w3.org/2000/svg"
                                                d="m256 512c-68.38 0-132.667-26.629-181.02-74.98-48.351-48.353-74.98-112.64-74.98-181.02s26.629-132.667 74.98-181.02c48.353-48.351 112.64-74.98 181.02-74.98s132.667 26.629 181.02 74.98c48.351 48.353 74.98 112.64 74.98 181.02s-26.629 132.667-74.98 181.02c-48.353 48.351-112.64 74.98-181.02 74.98zm0-472c-119.103 0-216 96.897-216 216s96.897 216 216 216 216-96.897 216-216-96.897-216-216-216zm100 293c0-11.046-8.954-20-20-20h-160c-11.046 0-20 8.954-20 20s8.954 20 20 20h160c11.046 0 20-8.954 20-20zm-188-167c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25zm150 25c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z"
                                                fill="#edc115"
                                                data-original="#000000"
                                                style=""
                                                class=""
                                            />
                                        </g></svg></span
                                >&#160;Neutral</label
                            >
                            <label
                                class="flex justify-start items-center"
                                :for="'happy_' + question.question_id"
                            >
                                <input
                                    @click="radioClicked"
                                    value="80"
                                    class="emoji-input cat_input w-4 h-4"
                                    type="radio"
                                    :name="'quiz_' + index"
                                    :id="'happy_' + question.question_id"
                                /><span class="text-xl ml-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns:svgjs="http://svgjs.com/svgjs"
                                        version="1.1"
                                        width="30"
                                        height="30"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 295.996 295.996"
                                        style="enable-background:new 0 0 512 512"
                                        xml:space="preserve"
                                        class=""
                                    >
                                        <g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M147.998,0C66.392,0,0,66.392,0,147.998s66.392,147.998,147.998,147.998s147.998-66.392,147.998-147.998   S229.605,0,147.998,0z M147.998,279.996c-36.256,0-69.143-14.696-93.022-38.44c-9.536-9.482-17.631-20.41-23.934-32.42   C21.442,190.847,16,170.047,16,147.998C16,75.214,75.214,16,147.998,16c34.523,0,65.987,13.328,89.533,35.102   c12.208,11.288,22.289,24.844,29.558,39.996c8.27,17.239,12.907,36.538,12.907,56.9   C279.996,220.782,220.782,279.996,147.998,279.996z"
                                                    fill="#0ccd18"
                                                    data-original="#000000"
                                                    style=""
                                                    class=""
                                                />
                                                <circle
                                                    cx="99.666"
                                                    cy="114.998"
                                                    r="16"
                                                    fill="#0ccd18"
                                                    data-original="#000000"
                                                    style=""
                                                    class=""
                                                />
                                                <circle
                                                    cx="198.666"
                                                    cy="114.998"
                                                    r="16"
                                                    fill="#0ccd18"
                                                    data-original="#000000"
                                                    style=""
                                                    class=""
                                                />
                                                <path
                                                    d="M147.715,229.995c30.954,0,60.619-15.83,77.604-42.113l-13.439-8.684c-15.597,24.135-44.126,37.604-72.693,34.308   c-22.262-2.567-42.849-15.393-55.072-34.308l-13.438,8.684c14.79,22.889,39.716,38.409,66.676,41.519   C140.814,229.8,144.27,229.995,147.715,229.995z"
                                                    fill="#0ccd18"
                                                    data-original="#000000"
                                                    style=""
                                                    class=""
                                                />
                                            </g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                        </g>
                                    </svg>
                                </span>
                                &#160;Happy</label
                            >
                            <label
                                class="flex justify-start items-center"
                                :for="'very_happy_' + question.question_id"
                            >
                                <input
                                    @click="radioClicked"
                                    value="100"
                                    class="emoji-input cat_input w-4 h-4"
                                    type="radio"
                                    :name="'quiz_' + index"
                                    :id="'very_happy_' + question.question_id"
                                /><span class="text-xl ml-1"
                                    ><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns:svgjs="http://svgjs.com/svgjs"
                                        version="1.1"
                                        width="30"
                                        height="30"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 512 512"
                                        style="enable-background:new 0 0 512 512"
                                        xml:space="preserve"
                                        class=""
                                    >
                                        <g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g>
                                                    <path
                                                        d="M437.019,74.981C388.668,26.629,324.38,0,256,0S123.332,26.629,74.981,74.981C26.628,123.332,0,187.62,0,256    s26.628,132.668,74.981,181.019C123.332,485.371,187.62,512,256,512s132.668-26.629,181.019-74.981    C485.372,388.668,512,324.38,512,256S485.372,123.332,437.019,74.981z M256,481.524c-124.354,0-225.524-101.17-225.524-225.524    S131.646,30.476,256,30.476S481.524,131.646,481.524,256S380.354,481.524,256,481.524z"
                                                        fill="#048718"
                                                        data-original="#000000"
                                                        style=""
                                                        class=""
                                                    />
                                                </g>
                                            </g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g>
                                                    <path
                                                        d="M200.622,188.396c-24.953-24.955-65.556-24.953-90.509,0c-5.951,5.95-5.951,15.599,0,21.55    c5.952,5.95,15.601,5.95,21.551,0c13.072-13.071,34.34-13.07,47.41,0c2.976,2.976,6.875,4.464,10.774,4.464    s7.8-1.488,10.774-4.464C206.573,203.995,206.573,194.347,200.622,188.396z"
                                                        fill="#048718"
                                                        data-original="#000000"
                                                        style=""
                                                        class=""
                                                    />
                                                </g>
                                            </g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g>
                                                    <path
                                                        d="M401.884,188.396c-24.953-24.953-65.556-24.955-90.509,0c-5.951,5.95-5.951,15.599,0,21.55    c5.952,5.95,15.601,5.95,21.551,0c13.07-13.071,34.338-13.072,47.41,0c2.976,2.976,6.875,4.464,10.774,4.464    s7.8-1.488,10.774-4.464C407.835,203.995,407.835,194.347,401.884,188.396z"
                                                        fill="#048718"
                                                        data-original="#000000"
                                                        style=""
                                                        class=""
                                                    />
                                                </g>
                                            </g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g>
                                                    <path
                                                        d="M391.111,267.175H120.889c-8.416,0-15.238,6.823-15.238,15.238c0,82.902,67.447,150.349,150.349,150.349    s150.349-67.447,150.349-150.349C406.349,273.997,399.527,267.175,391.111,267.175z M256,402.286    c-60.938,0-111.402-45.703-118.909-104.635H374.91C367.402,356.583,316.938,402.286,256,402.286z"
                                                        fill="#048718"
                                                        data-original="#000000"
                                                        style=""
                                                        class=""
                                                    />
                                                </g>
                                            </g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                            <g
                                                xmlns="http://www.w3.org/2000/svg"
                                            ></g>
                                        </g>
                                    </svg> </span
                                >&#160;Very Happy</label
                            >
                        </div>
                        <div>
                            <p
                                :id="'quiz_' + index"
                                class="text-red-600 text-xs text-center"
                            ></p>
                        </div>
                    </div>
                </div>
                <div
                    class="flex justify-center bg-purple-500 text-gray-100 items-center h-10"
                >
                    <button
                        @click="submitQuiz"
                        class="bg-red-500 rounded-sm px-3 py-1 hover:bg-red-800 ml-4 transform duration-500 ease-in-out focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </div>
            <Modal
                :toggleModal="toggleModal"
                :showModal="showModal"
                :storeAllAnswers="storeAllAnswers"
            ></Modal>
        </div>
        <footer
            class="w-full h-32 bg-gray-800 text-gray-100 text-center object-bottom text-xs"
        >
            <div class="h-full flex flex-col justify-center">
                <p class="inset-x-0 bottom-0">
                    &#x000A9;2021. All rights reserved&#160;|&#160;Made by
                    Aptego Software.
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
import * as myMethods from "./categoriesCode";
import Modal from "./Modal";
export default {
    components: {
        Modal
    },
    data() {
        return {
            val: "",
            categoryAnswers: {},
            dat: {},
            answerObject: {},
            countErrors: 0,
            scaleAnswers: {},
            showModal: true
        };
    },
    methods: {
        getScaleAnswers() {},

        /*This function determines what happens when the user clicks one of the input buttons.
    It handles questions about 'Scale' meaning there will be ten buttons, each with its only
    value. The purpose is to show visually the clicked button, add a checked attribute to it and
    disable all other buttons at the same time in case the user has already clicked another
    button and is now clicking a different one. It also gets the value of the button clicked.
    */
        buttonClicked(event) {
            event.target.checked = "checked";
            event.target.classList.add("ring-2");
            event.target.classList.add("ring-opacity-50");
            event.target.classList.add("ring-offset-2");
            event.target.classList.add("ring-gray-900");
            //getting all the inputs
            let all_inputs = [...document.getElementsByClassName("cat_input")];

            /*getting only those inputs with the same name as the clicked input (meaning they belong to the same question)
      but not including the clicked input.*/
            let all_buttons = all_inputs.filter(val => {
                return (
                    val.name == event.target.name &&
                    val.value != event.target.value
                );
            });
            //And then disabling the checked attribute and other classes for those inputs.
            // console.log(all_buttons)
            all_buttons.forEach(val => {
                val.checked = false;
                val.classList.remove("ring-2");
                val.classList.remove("ring-opacity-50");
                val.classList.remove("ring-offset-2");
                val.classList.remove("ring-gray-900");
            });

            /*getting the value of the clicked buttoon using the getAnswers Method.*/
            myMethods.getAnswers(event, this.userData, this.categoryAnswers);
        },
        //get the answers when a radio button is clicked
        radioClicked(event) {
            //calling the 'getAnswers' function for the categoriesCode module.
            myMethods.getAnswers(event, this.userData, this.categoryAnswers);
        },
        /* The following function checks for the total number of questions that
    are either multiple choice or scale. Its only these types of questions that
    we can check using the next() method whether a user has answered them or not.*/
        numberChecked() {
            //looping the category_data
            return this.category_data.filter(val => {
                return val.type == "Multiple Choice" || val.type == "Scale";
            });
        },
        prev() {
            this.$store.commit("prevSixthCategory");
        },
        submitQuiz() {
            /*calling the 'next' function from the categoriesCode module.
      For a full understanding of the 'next' function and how it works,
      please check the categoriesCode.js module
      */
            myMethods.next(
                "cat_input", //all radio button class names
                this.numberChecked(), //the total number of questions tha can be checked
                "quiz", //the radio buttons category name
                this.countErrors, //radio buttons not checked
                this.runOpen //function that will run if there are no errors
            );
        },

        runOpen() {
            /* Running the checkOpen function which check if all open ended questions have been answered.
            For a full understanding of the 'next' function and how it works, please check the categoriesCode.js module.*/
            console.log("hey you");
            myMethods.checkOpen(
                this.countErrors,
                "open-ended",
                this.addAnswersToState,
                this.userData,
                this.categoryAnswers
            );
        },

        /*The following function is the one that will run, if all the questions have been answered */
        addAnswersToState() {
            //this will add the answers to the state by dispatching an action
            this.$store.dispatch("getAnswers", this.categoryAnswers);
            this.toggleModal();
        },
        toggleModal() {
            this.showModal = !this.showModal;
        },
        //store the answers to the database
        storeAllAnswers() {
            this.$store.dispatch("saveAnswers");
            this.$router.push({ name: "dashboard" });
        }
    },
    computed: {
        category_data() {
            //getting the category questions from the state  - module C.
            let category_id = this.$route.params.id;
            return this.$store.getters.surveyQuestions(category_id);
        },
        userData() {
            return this.$store.state.c.loggedInUserInfo;
        }
    },
    created() {
        this.$store.dispatch("getSurveyQuestions");
    }
};
</script>

<style scoped>
.my-scale {
    width: 90%;
}

.question_container {
    width: 90%;
}
.emoji-input {
    appearance: none;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    border: 2px solid #999;
    transition: 0.2s all linear;
}

.emoji-input:checked {
    border: 6px solid #4b0082;
}
.emoji-input:focus {
    outline: none;
}

@media (min-width: 640px) {
    .my-scale {
        width: 80%;
    }
}

@media (min-width: 768px) {
    .question_container {
        width: 50rem;
    }
    .my-scale {
        width: 40rem;
    }
}
</style>
