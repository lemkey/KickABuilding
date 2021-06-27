import UIKit
import MapboxMaps
 
class ViewController: UIViewController {
 
internal var mapView: MapView!
 
override public func viewDidLoad() {
super.viewDidLoad()
 
let myResourceOptions = ResourceOptions(accessToken: "your_public_access_token")
mapView = MapView(frame: view.bounds, resourceOptions: myResourceOptions)
mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
 
self.view.addSubview(mapView)
}
