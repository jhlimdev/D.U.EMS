/**
 * Sample for Line Series
 */
import * as React from 'react';
import { useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Legend, DateTime, Tooltip, Highlight } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let data1 = [{ x: new Date(2012, 6, 11), y: 13.0 }, { x: new Date(2013, 6, 11), y: 12.0 }, { x: new Date(2014, 6, 11), y: 12.0 }, { x: new Date(2015, 6, 11), y: 12.0 }, { x: new Date(2016, 6, 11), y: 12.0 }, { x: new Date(2017, 6, 11), y: 13.0 }, { x: new Date(2018, 6, 11), y: 13.0 }, { x: new Date(2019, 6, 11), y: 12.0 }, { x: new Date(2020, 6, 11), y: 11.0 }];
export let data2 = [{ x: new Date(2012, 6, 11), y: 5.0 }, { x: new Date(2013, 6, 11), y: 5.0 }, { x: new Date(2014, 6, 11), y: 5.0 }, { x: new Date(2015, 6, 11), y: 5.0 }, { x: new Date(2016, 6, 11), y: 7.0 }, { x: new Date(2017, 6, 11), y: 10.0 }, { x: new Date(2018, 6, 11), y: 15.0 }, { x: new Date(2019, 6, 11), y: 17.0 }, { x: new Date(2020, 6, 11), y: 16.0 }];
export let data3 = [{ x: new Date(2012, 6, 11), y: 5.0 }, { x: new Date(2013, 6, 11), y: 4.0 }, { x: new Date(2014, 6, 11), y: 4.0 }, { x: new Date(2015, 6, 11), y: 3.0 }, { x: new Date(2016, 6, 11), y: 2.0 }, { x: new Date(2017, 6, 11), y: 2.0 }, { x: new Date(2018, 6, 11), y: 4.0 }, { x: new Date(2019, 6, 11), y: 6.0 }, { x: new Date(2020, 6, 11), y: 7.0 }];
export let data4 = [{ x: new Date(2012, 6, 11), y: 6.0 }, { x: new Date(2013, 6, 11), y: 6.0 }, { x: new Date(2014, 6, 11), y: 6.0 }, { x: new Date(2015, 6, 11), y: 5.0 }, { x: new Date(2016, 6, 11), y: 5.0 }, { x: new Date(2017, 6, 11), y: 6.0 }, { x: new Date(2018, 6, 11), y: 7.0 }, { x: new Date(2019, 6, 11), y: 7.0 }, { x: new Date(2020, 6, 11), y: 8.0 }];
export let data5 = [{ x: new Date(2012, 6, 11), y: 2.0 }, { x: new Date(2013, 6, 11), y: 2.0 }, { x: new Date(2014, 6, 11), y: 4.0 }, { x: new Date(2015, 6, 11), y: 4.0 }, { x: new Date(2016, 6, 11), y: 4.0 }, { x: new Date(2017, 6, 11), y: 5.0 }, { x: new Date(2018, 6, 11), y: 6.0 }, { x: new Date(2019, 6, 11), y: 7.0 }, { x: new Date(2020, 6, 11), y: 9.0 }];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    .charts {
        align :center
    }`;
const Line = () => {
    useEffect(() => {
        document.title = "D.U.EMS | 부서별 신입사원"
      }, [])
    const onChartLoad = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
    return (<div className="control-pane">
            <style>{SAMPLE_CSS}</style>
            <div className="control-section">
                <ChartComponent id="charts" style={{ textAlign: 'center' }} primaryXAxis={{ valueType: 'DateTime', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, labelFormat: 'y' }} load={load.bind(this)} primaryYAxis={{ title: '고용한 인원 수', rangePadding: 'None', minimum: 0, maximum: 20, interval: 4, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} legendSettings={{ enableHighlight: true }} width={Browser.isDevice ? '100%' : '75%'} title="연간 부서별 고용 인원" loaded={onChartLoad.bind(this)}>
                    <Inject services={[LineSeries, DateTime, Legend, Tooltip, Highlight]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data2} xName="x" yName="y" name="A.I" width={2} marker={{ visible: true, width: 7, height: 7, shape: 'Circle', isFilled: true }} type="Line"></SeriesDirective>
                        <SeriesDirective dataSource={data1} xName="x" yName="y" name="윈도우" width={2} marker={{ visible: true, width: 6, height: 6, shape: 'Triangle', isFilled: true }} type="Line"></SeriesDirective>
                        <SeriesDirective dataSource={data3} xName="x" yName="y" name="맥" width={2} marker={{ visible: true, width: 7, height: 7, shape: 'Diamond', isFilled: true }} type="Line"></SeriesDirective>
                        <SeriesDirective dataSource={data4} xName="x" yName="y" name="웹" width={2} marker={{ visible: true, width: 5, height: 5, shape: 'Rectangle', isFilled: true }} type="Line"></SeriesDirective>
                        <SeriesDirective dataSource={data5} xName="x" yName="y" name="리눅스" width={2} marker={{ visible: true, width: 7, height: 7, shape: 'Pentagon', isFilled: true }} type="Line"></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>);
};
export default Line;