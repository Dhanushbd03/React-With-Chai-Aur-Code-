import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/dhanushbd03", {
	// 		method: "GET",
	// 		headers: {
	// 			Authorization: `github_pat_11A4RSDJY0FOtCzY9uxFcZ_D07mKPVURWQvYR7VMcOdqo8Ebvm3rraB78rzS3UkiVSSC5X4USxZqahfAa`,
	// 		},
	// 	})
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			setData(data);
	// 		});
	// }, []);
	const data = useLoaderData();
	return (
		<div className="w-full text-center h-full">
			<h1 className="font-bold text-3xl p-5 text-gray-800">My account</h1>
			<div className="w-full flex justify-evenly  align-middle prof-box">
				<img
					src={data.avatar_url}
					alt="profile pic "
					className="rounded-full "
				/>
				<div className="w-1/2 flex flex-col text-xl  px-16 py-24 text-left ">
					<p className="text-5xl">
						<span className="font-bold">Name :</span> {data.name}
					</p>
					<p className="text-5xl">
						<span className="font-bold">Username:</span> {data.login}
					</p>
					<p className="text-5xl">
						<span className="font-bold">Bio : </span>
						{data.bio}
					</p>
					<p className="text-5xl">
						<span className="font-bold">Followers : </span>
						{data.followers}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/dhanushbd03", {
		method: "GET",
		headers: {
			Authorization: `github_pat_11A4RSDJY0FOtCzY9uxFcZ_D07mKPVURWQvYR7VMcOdqo8Ebvm3rraB78rzS3UkiVSSC5X4USxZqahfAa`,
		},
	});
	return response.json();
};
