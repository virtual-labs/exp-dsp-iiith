// This file will override Dijkstra's node and edge label rendering for better readability.
(function () {
  if (typeof Node === "undefined" || typeof Edge === "undefined") return;

  // Override Node.paint to color tentative distances differently
  Node.prototype.paint = function (context, node) {
    if (node.stat == 1) {
      // fixed
      context.strokeStyle = "rgb(40, 142, 200)";
      context.fillStyle = "rgb(40, 142, 200)";
    } else if (node.stat == 2) {
      // selected
      context.strokeStyle = "rgb(40, 142, 200)";
      context.fillStyle = "gray";
    } else if (node.stat == 3) {
      // adjacent
      context.strokeStyle = "black";
      context.fillStyle = "rgb(164, 198, 82)";
    } else {
      context.strokeStyle = "black";
      context.fillStyle = "white";
    }
    node.drawNode(context, node);
    printLabel(context, node);

    function printLabel(context, node) {
      var s = node.dist < 0 ? "" : "" + node.dist;
      var w1 = context.measureText(s).width + node.wh.h / 5;
      var x1 = node.xy.x + (node.wh.w / 2 + node.wh.h / 2) * node.labelPos.dx;
      var y1 = node.xy.y + (node.wh.h + 1) * node.labelPos.dy;
      // Draw node name
      context.fillStyle = "black";
      context.fillText(node.name, node.xy.x, node.xy.y + node.wh.h / 5);
      // Draw tentative distance in orange if not fixed, blue if fixed
      if (node.dist >= 0) {
        if (node.stat == 1) {
          context.fillStyle = "#287ec8"; // blue for fixed
        } else {
          context.fillStyle = "#e67e22"; // orange for tentative
        }
        context.font = "bold 14px Courier";
        context.fillText(s, x1, y1 + node.wh.h / 5);
        context.font = "18px 'Courier'";
      }
    }
  };

  // Override Edge.paint to ensure edge weights are always visible
  Edge.prototype.paint = function (context, edge) {
    var istat = Nodes[edge.initv].stat;
    var tstat = Nodes[edge.termv].stat;
    context.strokeStyle = "black";
    context.lineWidth = 1;
    if (edge.initv == Nodes[edge.termv].prev) {
      if (istat == 1 && tstat == 3) {
        context.strokeStyle = "black";
      } else {
        context.strokeStyle = "rgb(40, 142, 200)";
      }
      context.lineWidth = 3;
    }
    if (!isDigraph && edge.termv == Nodes[edge.initv].prev) {
      if (tstat == 1 && istat == 3) {
        context.strokeStyle = "black";
      } else {
        context.strokeStyle = "rgb(40, 142, 200)";
      }
      context.lineWidth = 3;
    }
    edge.drawEdge(context, edge);
    printLength(context, edge);

    function printLength(context, edge) {
      var w = context.measureText("" + edge.length).width;
      var h = edge.fs;
      var xc = (edge.initxy.x + edge.termxy.x) / 2;
      var yc = (edge.initxy.y + edge.termxy.y) / 2;
      // Draw a white rectangle behind the label for contrast
      context.save();
      context.fillStyle = "white";
      context.fillRect(xc - w / 2 - 2, yc - h / 2 - 2, w + 4, h + 4);
      context.restore();
      context.fillStyle = "black";
      context.font = "bold 14px Courier";
      context.fillText("" + edge.length, xc, yc + h / 4);
      context.font = "18px 'Courier'";
    }
  };
})();
