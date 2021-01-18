	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = require('react');

	var _react2 = _interopRequireDefault(_react);

	var _taucharts = require('taucharts');

	var _deepEqual = require('deep-equal');

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _props = require('prop-types');

	var createReactClass = require('create-react-class');

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TauChartReact = createReactClass({
		displayName: 'TauChart',
		
		propTypes: {
			options: _props.object.isRequired,
			data: _props.arrayOf(_props.object).isRequired
		},
		
		componentWillUnmount: function componentWillUnmount() {
			this.chart.destroy();
		},
		componentDidMount: function componentDidMount() {
			this.renderChart();
		},
		renderChart: function renderChart() {
			this.chart = new _taucharts.Chart(Object.assign({}, this.props.options, { data: this.props.data }));

			if (this.props.height && this.props.width) {
				this.chart.renderTo(this.refs.placeholder, {
					height: this.props.height,
					width: this.props.width
				});
			} else {
				this.chart.renderTo(this.refs.placeholder);
			}
		},
		shouldComponentUpdate: function shouldComponentUpdate(newProps) {
			if (newProps.className === this.props.className && newProps.height === this.props.height && newProps.width === this.props.width && (0, _deepEqual2.default)(newProps.options, this.props.options, { strict: true })) {
				this.chart.setData(newProps.data);
				return false;
			}
			return true;
		},
		componentDidUpdate: function componentDidUpdate() {
			this.chart.destroy();
			this.renderChart();
		},
		render: function render() {
			return _react2.default.createElement('div', { style: { height: '100%' }, className: this.props.className, ref: 'placeholder' });
		}
	});

	exports.default = TauChartReact;