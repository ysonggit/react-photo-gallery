(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('resize-observer-polyfill')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'resize-observer-polyfill'], factory) :
  (global = global || self, factory(global.Gallery = {}, global.React, global.PropTypes, global.ResizeObserver));
}(this, function (exports, React, PropTypes, ResizeObserver) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  ResizeObserver = ResizeObserver && ResizeObserver.hasOwnProperty('default') ? ResizeObserver['default'] : ResizeObserver;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var imgWithClick = {
    cursor: 'pointer'
  };

  var Photo = function Photo(_ref) {
    var index = _ref.index,
        onClick = _ref.onClick,
        photo = _ref.photo,
        margin = _ref.margin,
        direction = _ref.direction,
        top = _ref.top,
        left = _ref.left;
    var imgStyle = {
      margin: margin,
      display: 'block'
    };

    if (direction === 'column') {
      imgStyle.position = 'absolute';
      imgStyle.left = left;
      imgStyle.top = top;
    }

    var handleClick = function handleClick(event) {
      onClick(event, {
        photo: photo,
        index: index
      });
    };

    return React.createElement("img", _extends({
      style: onClick ? _objectSpread({}, imgStyle, imgWithClick) : imgStyle
    }, photo, {
      onClick: onClick ? handleClick : null
    }));
  };

  var photoPropType = PropTypes.shape({
    key: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
    srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  });
  Photo.propTypes = {
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    photo: photoPropType.isRequired,
    margin: PropTypes.number,
    top: function top(props) {
      if (props.direction === 'column' && typeof props.top !== 'number') {
        return new Error('top is a required number when direction is set to `column`');
      }
    },
    left: function left(props) {
      if (props.direction === 'column' && typeof props.left !== 'number') {
        return new Error('left is a required number when direction is set to `column`');
      }
    },
    direction: PropTypes.string
  };

  var round = function round(value, decimals) {
    if (!decimals) decimals = 0;
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  };

  var computeColumnLayout = function computeColumnLayout(_ref) {
    var photos = _ref.photos,
        columns = _ref.columns,
        containerWidth = _ref.containerWidth,
        margin = _ref.margin;
    // calculate each colWidth based on total width and column amount
    var colWidth = (containerWidth - margin * 2 * columns) / columns; // map through each photo to assign adjusted height and width based on colWidth

    var photosWithSizes = photos.map(function (photo) {
      var newHeight = photo.height / photo.width * colWidth;
      return _objectSpread({}, photo, {
        width: round(colWidth, 1),
        height: round(newHeight, 1)
      });
    }); // store all possible left positions
    // and current top positions for each column

    var colLeftPositions = [];
    var colCurrTopPositions = [];

    for (var i = 0; i < columns; i++) {
      colLeftPositions[i] = round(i * (colWidth + margin * 2), 1);
      colCurrTopPositions[i] = 0;
    } // map through each photo, then reduce thru each "column"
    // find column with the smallest height and assign to photo's 'top'
    // update that column's height with this photo's height


    var photosPositioned = photosWithSizes.map(function (photo) {
      var smallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
        acc = item < colCurrTopPositions[acc] ? i : acc;
        return acc;
      }, 0);
      photo.top = colCurrTopPositions[smallestCol];
      photo.left = colLeftPositions[smallestCol];
      colCurrTopPositions[smallestCol] = colCurrTopPositions[smallestCol] + photo.height + margin * 2; // store the tallest col to use for gallery height because of abs positioned elements

      var tallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
        acc = item > colCurrTopPositions[acc] ? i : acc;
        return acc;
      }, 0);
      photo.containerHeight = colCurrTopPositions[tallestCol];
      return photo;
    });
    return photosPositioned;
  };

  var ratio = function ratio(_ref) {
    var width = _ref.width,
        height = _ref.height;
    return round(width / height, 2);
  };

  /*
  Copyright 2007-2013 Marijn Haverbeke frin "Eloquent Javascript, 1st Edition"

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */
  function BinaryHeap(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }
  BinaryHeap.prototype = {
    push: function push(element) {
      // Add the new element to the end of the array.
      this.content.push(element); // Allow it to bubble up.

      this.bubbleUp(this.content.length - 1);
    },
    pop: function pop() {
      // Store the first element so we can return it later.
      var result = this.content[0]; // Get the element at the end of the array.

      var end = this.content.pop(); // If there are any elements left, put the end element at the
      // start, and let it sink down.

      if (this.content.length > 0) {
        this.content[0] = end;
        this.sinkDown(0);
      }

      return result;
    },
    remove: function remove(node) {
      var length = this.content.length; // To remove a value, we must search through the array to find
      // it.

      for (var i = 0; i < length; i++) {
        if (this.content[i] != node) continue; // When it is found, the process seen in 'pop' is repeated
        // to fill up the hole.

        var end = this.content.pop(); // If the element we popped was the one we needed to remove,
        // we're done.

        if (i == length - 1) break; // Otherwise, we replace the removed element with the popped
        // one, and allow it to float up or sink down as appropriate.

        this.content[i] = end;
        this.bubbleUp(i);
        this.sinkDown(i);
        break;
      }
    },
    size: function size() {
      return this.content.length;
    },
    bubbleUp: function bubbleUp(n) {
      // Fetch the element that has to be moved.
      var element = this.content[n],
          score = this.scoreFunction(element); // When at 0, an element can not go up any further.

      while (n > 0) {
        // Compute the parent element's index, and fetch it.
        var parentN = Math.floor((n + 1) / 2) - 1,
            parent = this.content[parentN]; // If the parent has a lesser score, things are in order and we
        // are done.

        if (score >= this.scoreFunction(parent)) break; // Otherwise, swap the parent with the current element and
        // continue.

        this.content[parentN] = element;
        this.content[n] = parent;
        n = parentN;
      }
    },
    sinkDown: function sinkDown(n) {
      // Look up the target element and its score.
      var length = this.content.length,
          element = this.content[n],
          elemScore = this.scoreFunction(element);

      while (true) {
        // Compute the indices of the child elements.
        var child2N = (n + 1) * 2,
            child1N = child2N - 1; // This is used to store the new position of the element,
        // if any.

        var swap = null; // If the first child exists (is inside the array)...

        if (child1N < length) {
          // Look it up and compute its score.
          var child1 = this.content[child1N],
              child1Score = this.scoreFunction(child1); // If the score is less than our element's, we need to swap.

          if (child1Score < elemScore) swap = child1N;
        } // Do the same checks for the other child.


        if (child2N < length) {
          var child2 = this.content[child2N],
              child2Score = this.scoreFunction(child2);
          if (child2Score < (swap == null ? elemScore : child1Score)) swap = child2N;
        } // No need to swap further, we are done.


        if (swap == null) break; // Otherwise, swap and continue.

        this.content[n] = this.content[swap];
        this.content[swap] = element;
        n = swap;
      }
    }
  };

  var buildPrecedentsMap = function buildPrecedentsMap(graph, startNode, endNode) {
    // store the previous vertex of the shortest path of arrival
    var precedentsMap = {}; // store nodes already visited

    var visited = {}; // store/update only the shortest edge weights measured
    // the purpose of this is object is constant time lookup vs. binary heap lookup O(n)

    var storedShortestPaths = {};
    storedShortestPaths[startNode] = 0; // priority queue of ALL nodes and storedShortestPaths
    // don't bother to delete them because it's faster to look at visited?

    var pQueue = new BinaryHeap(function (n) {
      return n.weight;
    });
    pQueue.push({
      id: startNode,
      weight: 0
    });

    while (pQueue.size()) {
      // pop node with shortest total weight from start node
      var shortestNode = pQueue.pop();
      var shortestNodeId = shortestNode.id; // if already visited, continue

      if (visited[shortestNodeId]) continue; // visit neighboring nodes

      var neighboringNodes = graph(shortestNodeId) || {};
      visited[shortestNodeId] = 1; // meet the neighbors, looking for shorter paths

      for (var neighbor in neighboringNodes) {
        // weight of path from startNode to this neighbor
        var newTotalWeight = shortestNode.weight + neighboringNodes[neighbor]; // if this is the first time meeting the neighbor OR if the new total weight from
        // start node to this neighbor node is greater than the old weight path, update it,
        // and update precedent node

        if (typeof storedShortestPaths[neighbor] === 'undefined' || storedShortestPaths[neighbor] > newTotalWeight) {
          storedShortestPaths[neighbor] = newTotalWeight;
          pQueue.push({
            id: neighbor,
            weight: newTotalWeight
          });
          precedentsMap[neighbor] = shortestNodeId;
        }
      }
    }

    if (typeof storedShortestPaths[endNode] === 'undefined') {
      throw new Error("There is no path from ".concat(startNode, " to ").concat(endNode));
    }

    return precedentsMap;
  }; // build the route from precedent node vertices


  var getPathFromPrecedentsMap = function getPathFromPrecedentsMap(precedentsMap, endNode) {
    var nodes = [];
    var n = endNode;
    var precedent;

    while (n) {
      nodes.push(n);
      precedent = precedentsMap[n];
      n = precedentsMap[n];
    }

    return nodes.reverse();
  }; // build the precedentsMap and find the shortest path from it


  var findShortestPath = function findShortestPath(graph, startNode, endNode) {
    var precedentsMap = buildPrecedentsMap(graph, startNode, endNode);
    return getPathFromPrecedentsMap(precedentsMap, endNode);
  };

  // to calculate the single best layout using Dijkstra's findShortestPat
  // get the height for a set of photos in a potential row

  var getCommonHeight = function getCommonHeight(row, containerWidth, margin) {
    var rowWidth = containerWidth - row.length * (margin * 2);
    var totalAspectRatio = row.reduce(function (acc, photo) {
      return acc + ratio(photo);
    }, 0);
    return rowWidth / totalAspectRatio;
  }; // calculate the cost of breaking at this node (edge weight)


  var cost = function cost(photos, i, j, width, targetHeight, margin) {
    var row = photos.slice(i, j);
    var commonHeight = getCommonHeight(row, width, margin);
    return Math.pow(Math.abs(commonHeight - targetHeight), 2);
  }; // return function that gets the neighboring nodes of node and returns costs


  var makeGetNeighbors = function makeGetNeighbors(targetHeight, containerWidth, photos, limitNodeSearch, margin) {
    return function (start) {
      var results = {};
      start = +start;
      results[+start] = 0;

      for (var i = start + 1; i < photos.length + 1; ++i) {
        if (i - start > limitNodeSearch) break;
        results[i.toString()] = cost(photos, start, i, containerWidth, targetHeight, margin);
      }

      return results;
    };
  };

  var computeRowLayout = function computeRowLayout(_ref) {
    var containerWidth = _ref.containerWidth,
        limitNodeSearch = _ref.limitNodeSearch,
        targetRowHeight = _ref.targetRowHeight,
        margin = _ref.margin,
        photos = _ref.photos;
    // const t = +new Date();
    var getNeighbors = makeGetNeighbors(targetRowHeight, containerWidth, photos, limitNodeSearch, margin);
    var path = findShortestPath(getNeighbors, '0', photos.length);
    path = path.map(function (node) {
      return +node;
    }); // console.log(`time to find the shortest path: ${(+new Date() - t)} ms`);

    for (var i = 1; i < path.length; ++i) {
      var row = photos.slice(path[i - 1], path[i]);
      var height = getCommonHeight(row, containerWidth, margin);

      for (var j = path[i - 1]; j < path[i]; ++j) {
        photos[j].width = round(height * ratio(photos[j]), 1);
        photos[j].height = height;
      }
    }

    return photos;
  };

  // the aspect ratio of the container with images having an avg AR of 1.5
  // as the minimum amount of photos per row, plus some nodes

  var findIdealNodeSearch = function findIdealNodeSearch(_ref) {
    var targetRowHeight = _ref.targetRowHeight,
        containerWidth = _ref.containerWidth;
    var rowAR = containerWidth / targetRowHeight;
    return round(rowAR / 1.5) + 8;
  };

  var Gallery =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Gallery, _React$Component);

    function Gallery() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Gallery);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Gallery)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        containerWidth: 0
      });

      _defineProperty(_assertThisInitialized(_this), "handleClick", function (event, _ref) {
        var index = _ref.index;
        var _this$props = _this.props,
            photos = _this$props.photos,
            onClick = _this$props.onClick;
        onClick(event, {
          index: index,
          photo: photos[index],
          previous: photos[index - 1] || null,
          next: photos[index + 1] || null
        });
      });

      return _this;
    }

    _createClass(Gallery, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.animationFrameID = null;
        this.observer = new ResizeObserver(function (entries) {
          // only do something if width changes
          var newWidth = entries[0].contentRect.width;

          if (_this2.state.containerWidth !== newWidth) {
            // put in an animation frame to stop "benign errors" from
            // ResizObserver https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
            _this2.animationFrameID = window.requestAnimationFrame(function () {
              _this2.setState({
                containerWidth: Math.floor(newWidth)
              });
            });
          }
        });
        this.observer.observe(this._gallery);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.observer.disconnect();
        window.cancelAnimationFrame(this.animationFrameID);
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var containerWidth = this.state.containerWidth; // no containerWidth until after first render with refs, skip calculations and render nothing

        if (!containerWidth) return React.createElement("div", {
          ref: function ref(c) {
            return _this3._gallery = c;
          }
        }, "\xA0"); // subtract 1 pixel because the browser may round up a pixel

        var _this$props2 = this.props,
            margin = _this$props2.margin,
            onClick = _this$props2.onClick,
            direction = _this$props2.direction,
            photos = _this$props2.photos;
        var width = containerWidth - 1;
        var galleryStyle, thumbs;

        if (direction === 'row') {
          var _this$props3 = this.props,
              limitNodeSearch = _this$props3.limitNodeSearch,
              targetRowHeight = _this$props3.targetRowHeight; // allow user to calculate limitNodeSearch from containerWidth

          if (typeof limitNodeSearch === 'function') {
            limitNodeSearch = limitNodeSearch(containerWidth);
          }

          if (typeof targetRowHeight === 'function') {
            targetRowHeight = targetRowHeight(containerWidth);
          } // set how many neighboring nodes the graph will visit


          if (limitNodeSearch === undefined) {
            limitNodeSearch = 1;

            if (containerWidth >= 450) {
              limitNodeSearch = findIdealNodeSearch({
                containerWidth: containerWidth,
                targetRowHeight: targetRowHeight
              });
            }
          }

          galleryStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row'
          };
          thumbs = computeRowLayout({
            containerWidth: width,
            limitNodeSearch: limitNodeSearch,
            targetRowHeight: targetRowHeight,
            margin: margin,
            photos: photos
          });
        }

        if (direction === 'column') {
          var columns = this.props.columns; // allow user to calculate columns from containerWidth

          if (typeof columns === 'function') {
            columns = columns(containerWidth);
          } // set default breakpoints if user doesn't specify columns prop


          if (columns === undefined) {
            columns = 1;
            if (containerWidth >= 500) columns = 2;
            if (containerWidth >= 900) columns = 3;
            if (containerWidth >= 1500) columns = 4;
          }

          galleryStyle = {
            position: 'relative'
          };
          thumbs = computeColumnLayout({
            containerWidth: width,
            columns: columns,
            margin: margin,
            photos: photos
          });
          galleryStyle.height = thumbs[thumbs.length - 1].containerHeight;
        }

        var _this$props$renderIma = this.props.renderImage,
            PhotoComponent = _this$props$renderIma === void 0 ? Photo : _this$props$renderIma;
        return React.createElement("div", {
          className: "react-photo-gallery--gallery"
        }, React.createElement("div", {
          ref: function ref(c) {
            return _this3._gallery = c;
          },
          style: galleryStyle
        }, thumbs.map(function (photo, index) {
          var left = photo.left,
              top = photo.top,
              key = photo.key,
              containerHeight = photo.containerHeight,
              rest = _objectWithoutProperties(photo, ["left", "top", "key", "containerHeight"]);

          return React.createElement(PhotoComponent, {
            key: photo.key || photo.src,
            margin: margin,
            index: index,
            photo: rest,
            direction: direction,
            left: left,
            top: top,
            onClick: onClick ? _this3.handleClick : null
          });
        })));
      }
    }]);

    return Gallery;
  }(React.Component);

  Gallery.propTypes = {
    photos: PropTypes.arrayOf(photoPropType).isRequired,
    direction: PropTypes.string,
    onClick: PropTypes.func,
    columns: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    targetRowHeight: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    limitNodeSearch: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
    margin: PropTypes.number,
    renderImage: PropTypes.func
  };
  Gallery.defaultProps = {
    margin: 2,
    direction: 'row',
    targetRowHeight: 300
  };

  exports.Photo = Photo;
  exports.default = Gallery;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
