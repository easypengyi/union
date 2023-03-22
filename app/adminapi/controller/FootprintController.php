<?php
namespace app\adminapi\controller;

use app\adminapi\logic\FootprintLogic;
use app\adminapi\validate\FootprintValidate;

class FootprintController extends BaseAdminController
{
    /**
     * @notes 查看足迹气泡配置及列表
     * @return array
     * @author Tab
     * @date 2021/7/15 15:30
     */
    public function index()
    {
        $config = FootprintLogic::getConfig();
        $lists = FootprintLogic::lists();

        return $this->data(['config' => $config, 'lists' => $lists]);
    }

    /**
     * @notes  查看足迹气泡详情
     * @return \think\response\Json
     * @author Tab
     * @date 2021/7/15 15:56
     */
    public function detail()
    {
        $params = (new FootprintValidate())->goCheck('detail');
        $result = FootprintLogic::detail($params);
        return $this->data($result);
    }

    /**
     * @notes 编辑足迹气泡模板
     * @return \think\response\Json
     * @author Tab
     * @date 2021/7/15 16:11
     */
    public function edit()
    {
        $params = (new FootprintValidate())->post()->goCheck();
        FootprintLogic::edit($params);
        return $this->success('编辑成功');
    }

    /**
     * @notes 设置足迹气泡
     * @return \think\response\Json
     * @author Tab
     * @date 2021/7/15 16:22
     */
    public function set()
    {
        $params = $this->request->post();
        FootprintLogic::setConfig($params);
        return $this->success('设置成功');
    }
}