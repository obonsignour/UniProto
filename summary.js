function addSummaryContent(appName) {
	const technoPourcent = generateRandomArray()
	const markers = generateMarkerArray()
	const markerIndex = markers.indexOf('marker')
	const summary_html = `
	<div class="app-metrics">
    <h1>${appName}</h1>
		<h2>Application Metrics</h2>
		<div class="app-size">
			<div class="app-metric">${(117548 * markerIndex).toLocaleString()} Lines of Code</div>
			<div class="scale">
				<div class="bar">
					<div class="filled" style="width: ${markerIndex * 20}%"></div>
				</div>
				<div class="labels">
					<span class="${markers[0]}"></span>
					<span class="${markers[1]}">S</span>
					<span class="${markers[2]}">M</span>
					<span class="${markers[3]}">L</span>
					<span class="${markers[4]}">XL</span>
					<span class="${markers[5]}">XXL</span>
				</div>
			</div>
		</div>

		<span class="app-metric">120,444 Objects & 543,134 relationships</span>
		<span class="app-metric">876 Transactions</span>
		<span class="app-metric">1,843 Data Call Graphs</span>

		<span class="app-metric">Version Onboarding-202312220201</span>
		<span class="app-metric">Version Date 11/1/2015</span>
	</div>

	<h2>Application technologies</h2>
	<div class="bar-chart">
		<div class="section" style="width: ${technoPourcent[0]}%; background-color: rgb(176, 114, 1)">
			<span class="section-name">Java</span>
			<span class="section-value">20%</span>
		</div>
		<div class="section" style="width: ${technoPourcent[1]}%; background-color: rgb(63, 123, 202)">
			<span class="section-name">SQL</span>
			<span class="section-value">30%</span>
		</div>
		<div class="section" style="width: ${technoPourcent[2]}%; background-color: rgb(193, 241, 2)">
			<span class="section-name">JavaScript</span>
			<span class="section-value">10%</span>
		</div>
		<div class="section" style="width: ${technoPourcent[3]}%; background-color: rgb(210, 82, 3)">
			<span class="section-name">CSS</span>
			<span class="section-value">25%</span>
		</div>
		<div class="section" style="width: ${technoPourcent[4]}%; background-color: rgb(227, 140, 0)">
			<span class="section-name">HTML</span>
			<span class="section-value">15%</span>
		</div>
	</div>

	<h2>Architecture Preview</h2>

`
	const tabContents = document.getElementById('display-panel')
	const newTabContent = document.createElement('div')
	newTabContent.id = `summary-${appName}-content`
	newTabContent.classList.add('panel-content')
	newTabContent.classList.add('summary-content')
	newTabContent.classList.add('masked')
	newTabContent.innerHTML = summary_html

	tabContents.appendChild(newTabContent)
}

function generateRandomArray() {
	const array = []
	let sum = 0

	for (let i = 0; i < 4; i++) {
		const randomNum = Math.floor(Math.random() * 100)
		array.push(randomNum)
		sum += randomNum
	}

	array.push(100 - sum)

	return array
}

function generateMarkerArray() {
	const array = ['marker', 'none', 'none', 'none', 'none', 'none']

	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}

	return array
}
