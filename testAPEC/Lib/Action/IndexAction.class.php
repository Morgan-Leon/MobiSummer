<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
    public function index(){
    $this->display();    
    
    }
    public function learnMore(){
	$this->show('<p>服务器能通过URL接收到数据
		   更改<a href="http://192.169.250.54/MobiSummer/index.php/Index/archive/">
		   {IP}/MobiSummer/index.php/Index/archive/</a>
		   后面的参数，能传输到服务器中。</p>');
	$this->show('<br><a href="http://192.169.250.54/MobiSummer/">Go Back</a>');
    }
    
    public function archive(){
	
	//dump($_GET);
	$product_id = $_GET["_URL_"][2];
	$version = $_GET["_URL_"][3];
	$imei = $_GET["_URL_"][4];
	$androidid = $_GET["_URL_"][5];
	$ip = $_GET["_URL_"][6];
	$active_time = $_GET["_URL_"][7];
	$postback_timestamp = $_GET["_URL_"][8];
	$click_id = $_GET["_URL_"][9];
	
	

	$str = "product_id = $product_id";
	dump("product_id = $product_id");
	dump("version = $version");
	dump("imei = $imei");
	dump("androidid  = $androidid ");
	dump("ip = $ip");
	dump("active_time = $active_time");
	dump("postback_timestamp = $postback_timestamp");
	dump("click_id = $click_id");
	
	    echo "EXAMPLE: ";
	    echo "http://data.union.ucweb.com/RecvActionService?sign=default&sign_type=ip&advertiser={advertiser_name}&prod_id={product_id}&ver={version}&imei={imei}&androidid={androidid}&ip={ip}&activate_time={active_time}&timestamp={postback_timestamp}&clickid={click_id}&ua={user_agent}&imsi={imsi}&cid={cid}&isp={isp}&lat={lat}&lon={lon}";
    
	$this->show('<br><br><a href="http://192.169.250.54/MobiSummer/">Go Back</a>');
    }
}