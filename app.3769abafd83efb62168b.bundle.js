(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{386:function(module,exports,__webpack_require__){__webpack_require__(387),__webpack_require__(388),__webpack_require__(538),module.exports=__webpack_require__(539)},454:function(module,exports){},539:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(540).configure)(__webpack_require__(720),module)}).call(this,__webpack_require__(82)(module))},720:function(module,exports,__webpack_require__){var map={"./realistic-ui/Button.stories.tsx":721};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=720},721:function(module,exports,__webpack_require__){"use strict";(function(module){var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.toStorybook=exports.default=void 0;var _taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(217)),_react=_interopRequireDefault(__webpack_require__(1)),_Button=_interopRequireDefault(__webpack_require__(722)),_decorators=__webpack_require__(873),_reactNative=__webpack_require__(874),_native=_interopRequireDefault(__webpack_require__(230)),_addonKnobs=__webpack_require__(906);function _templateObject(){var data=(0,_taggedTemplateLiteralLoose2.default)(["\n  background-color: transparent;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 28px;\n  padding-top: 80px;\n\n  flex-direction: column;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=_native.default.View(_templateObject());function Default(){return _react.default.createElement(Container,null,_react.default.createElement(_Button.default,{style:{marginVertical:40},containerStyle:{marginTop:32},isDisabled:!0,text:(0,_addonKnobs.text)("button text","this is disabled")}))}exports.default={title:"Button"};var toStorybook=function toStorybook(){return _react.default.createElement(Default,null)};exports.toStorybook=toStorybook,toStorybook.story={name:"default"},(0,_reactNative.storiesOf)("Button",module).addDecorator(_decorators.ContainerDeco).add("default",(function(){return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(Default,null))}))}).call(this,__webpack_require__(82)(module))},722:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(77)),_taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(217)),_ActivityIndicator=_interopRequireDefault(__webpack_require__(342)),_TouchableOpacity=_interopRequireDefault(__webpack_require__(228)),_react=_interopRequireDefault(__webpack_require__(1)),_native=_interopRequireDefault(__webpack_require__(230));function _templateObject4(){var data=(0,_taggedTemplateLiteralLoose2.default)(["\n  color: #969696;\n"]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=(0,_taggedTemplateLiteralLoose2.default)(["\n  font-size: 16px;\n  color: #069ccd;\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=(0,_taggedTemplateLiteralLoose2.default)(["\n  background-color: #cccccc;\n  border-color: rgb(200, 200, 200);\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=(0,_taggedTemplateLiteralLoose2.default)(["\n  align-self: center;\n  width: 320px;\n  height: 52px;\n  border-color: blue;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]);return _templateObject=function _templateObject(){return data},data}var StyledButton=_native.default.View(_templateObject()),StyledDisabled=(0,_native.default)(StyledButton)(_templateObject2()),StyledText=_native.default.Text(_templateObject3()),StyledDisabledText=(0,_native.default)(StyledText)(_templateObject4());var _default=function Button(props){var isDisabled=props.isDisabled,testID=props.testID,disabledStyle=props.disabledStyle,containerStyle=props.containerStyle,isLoading=props.isLoading,style=props.style,textStyle=props.textStyle,disabledTextStyle=props.disabledTextStyle,indicatorColor=props.indicatorColor,text=props.text,leftElement=props.leftElement,rightElement=props.rightElement,activeOpacity=props.activeOpacity,onPress=props.onPress,touchableOpacityProps=props.touchableOpacityProps;return isDisabled?_react.default.createElement(StyledDisabled,{testID:testID,style:[containerStyle,disabledStyle]},_react.default.createElement(StyledDisabledText,{style:[textStyle,disabledTextStyle]},text)):isLoading?_react.default.createElement(StyledButton,{testID:testID,style:[containerStyle,style]},_react.default.createElement(_ActivityIndicator.default,{size:"small",color:indicatorColor})):_react.default.createElement(_TouchableOpacity.default,(0,_extends2.default)({testID:testID,activeOpacity:activeOpacity,onPress:onPress,style:containerStyle,delayPressIn:30},touchableOpacityProps),_react.default.createElement(StyledButton,{style:style},leftElement||null,_react.default.createElement(StyledText,{style:textStyle},text),rightElement||null))};exports.default=_default},873:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.ContainerDeco=void 0;var _taggedTemplateLiteralLoose2=_interopRequireDefault(__webpack_require__(217)),_react=_interopRequireDefault(__webpack_require__(1)),_native=_interopRequireDefault(__webpack_require__(230));function _templateObject(){var data=(0,_taggedTemplateLiteralLoose2.default)(["\n  flex: 1;\n  background-color: #f5fcff;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return _templateObject=function _templateObject(){return data},data}exports.ContainerDeco=function ContainerDeco(storyFn){return _react.default.createElement(Container,null,storyFn())};var Container=_native.default.View(_templateObject())}},[[386,1,2]]]);
//# sourceMappingURL=app.3769abafd83efb62168b.bundle.js.map