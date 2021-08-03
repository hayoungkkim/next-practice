import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta keyword={keyword} />
			<meta contents={contents} />
		</Head>
	);
};

HeadInfo.defaultProps = {
	title: "My Blog",
	keyword: "My Blog powered by Next js",
	contents: "My Blog powered by Next js",
};

export default HeadInfo;
