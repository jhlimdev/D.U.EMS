/**
 * Sample for Cylindrical Column series
 */
import * as React from 'react';
import { useEffect } from "react";
import { ChartComponent, ColumnSeries, Category, DataLabel, Tooltip, SeriesDirective, SeriesCollectionDirective, Inject } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let data = [
    // { x: 'China', y: 26, tooltipMappingName: 'China' },
    { x: '웹', y: 8, tooltipMappingName: '웹' },
    { x: '윈도우', y: 17, tooltipMappingName: '윈도우' },
    { x: '맥', y: 7, tooltipMappingName: '맥' },
    { x: '리눅스', y: 12, tooltipMappingName: '리눅스' },
    { x: 'A.I.', y: 46, tooltipMappingName: 'A.I.' }
];
const Cylindrical = () => {
    useEffect(() => {
        document.title = "D.U.EMS | 부서별 수입"
      }, [])
    const onChartLoad = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
    return (<div className='control-pane'>
            <div className='control-section'>
                <ChartComponent id='charts' style={{ textAlign: "center" }} chartArea={{ border: { width: 0 } }} title='지난 달 부서별 수익 현황' primaryXAxis={{
            valueType: 'Category',
            interval: 1,
            majorGridLines: { width: 0 },
            labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
            labelRotation: Browser.isDevice ? -45 : 0,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 }
        }} primaryYAxis={{
            title: '부서별 수익(원₩)',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            maximum: 50,
            interval: 10
        }} tooltip={{
            enable: true,
            header: "<b>${point.tooltip}</b>",
            format: "KR ₩: <b>${point.y}₩</b>"
        }} load={load.bind(this)} loaded={onChartLoad.bind(this)} width={Browser.isDevice ? '100%' : '75%'}>
                    <Inject services={[ColumnSeries, Category, DataLabel, Tooltip]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data} columnFacet='Cylinder' type='Column' xName='x' yName='y' width={2} columnSpacing={0.1} tooltipMappingName='tooltipMappingName'>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>);
};
export default Cylindrical;